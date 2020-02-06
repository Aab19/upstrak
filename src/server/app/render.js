#!/usr/bin/env node

import React from "react"
import ReactDOMServer from "react-dom/server"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { StaticRouter } from "react-router"
import { Provider } from "react-redux"
import { renderRoutes, matchRoutes } from "react-router-config"
import Helmet from "react-helmet"
import routes from "../../client/routes"
import { Reducers, Middlewares } from "../../config/store"
import webpackAssets from "../../config/webpack-assets"
import Loadable from "react-loadable"
import { createStore } from "redux"

import fs from "fs"
import path from "path"

function renderCss(cb) {
  var filePath = path.join(__dirname, "../../../assets/css/style.css")

  return fs.readFile(filePath, "utf8", function(err, data) {
    if (err) throw err
    else return cb(data)
  })
}

export default function handleRender(req, res, next) {
  let html,
    store = createStore(Reducers, Middlewares),
    context = {}

  // dettect static function fetchData in container target
  const promises = matchRoutes(routes, req.url).map(({ route, match }) => {
    let fetchData = route.component.fetchData
    return fetchData instanceof Function
      ? fetchData(store, match.params, match.query)
      : Promise.resolve()
  })

  return Promise.all(promises).then(() => {
    // ref loadable: https://github.com/jamiebuilds/react-loadable#finding-out-which-dynamic-modules-were-rendered
    // styled component sever rendering
    const sheet = new ServerStyleSheet()
    let preloadedState = store.getState()
    // added session data
    if (req.session.auth && req.session.auth.id) {
      const auth = req.session.auth
      // delete auth.user_key
      preloadedState.Auth = auth
      // regerate store
      store = createStore(Reducers, preloadedState, Middlewares)
    }
    // return respond html as string from react-dom-server
    html = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StyleSheetManager sheet={sheet.instance}>
          <StaticRouter location={req.url} context={context}>
            <Provider store={store}>{renderRoutes(routes)}</Provider>
          </StaticRouter>
        </StyleSheetManager>
      </Loadable.Capture>
    )
    const styleTags = sheet.getStyleTags()
    if (context.url) {
      res.status(500).end("internal server error")
    } else {
      return renderCss(function(css) {
        //render html + preloaded state
        var global = req.session.global
        res.header("Access-Control-Allow-Credentials", true)
        res.end(renderHtml(html, styleTags, preloadedState, global, css))
      })
    }
  })
}

// wrapper of render HTML
function renderHtml(
  body = "",
  styleTags,
  preloadedState = {},
  global = {},
  css
) {
  const head = Helmet.rewind()
  return `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        ${head.title.toString()}
        ${head.meta.toString()}
        <link rel="manifest" crossorigin="use-credentials" href="/manifest.json">

        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Upstrak">
        <meta name="apple-mobile-web-app-title" content="Upstrak">
        <meta name="msapplication-starturl" content="https://upstrak.com:2019/">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        ${head.link.toString()}
        ${styleTags}
        <link rel="shortcut icon" href="/assets/favicon.ico">
        <link rel="stylesheet" href="/assets/css/grid.min.css" />
        <link rel="stylesheet" href="/assets/css/plyr.min.css" />
        <style type="text/css">${css}</style>
        <script src="/firebase-messaging-sw.js"></script>
        <script>
          if('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js',{useCache: false}).then(function() { console.log('Service Worker Registered'); });
          }
        </script>
      </head>
      <body>
        <div id="app">${body}</div>
        <div id="upstrak-global"></div>
        <script>
          window.__data__ = ${JSON.stringify(preloadedState)};
          window.__global__ = ${JSON.stringify(global)};
        </script>
        <script src="${webpackAssets.vendor.js}"></script>
        <script src="${webpackAssets.app.js}"></script>
      </body>
    </html>
  `.replace(/\s\s+/g, "")
}
