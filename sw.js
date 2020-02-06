const CACHE_NAME = "cache-upstrakweb-v2"
const URLS_TO_CACHE = []
self.addEventListener("beforeinstallprompt", function(event) {
  // Stash the event so it can be triggered later.
  deferredPrompt = event
  // Update UI notify the user they can add to home screen
  showInstallPromotion()
})
// init
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE)
    })
  )
})

self.addEventListener("fetch", function(event) {
  // event.respondWith(
  //   caches.match(event.request).then(function(response) {
  //     if (response) {
  //       return response
  //     } else {
  //       // clone request stream
  //       // as stream once consumed, can not be used again
  //       var reqCopy = event.request.clone()

  //       return fetch(reqCopy, { credentials: "include" }) // reqCopy stream consumed
  //         .then(function(response) {
  //           // bad response
  //           // response.type !== 'basic' means third party origin request
  //           if (
  //             !response ||
  //             response.status !== 200 ||
  //             response.type !== "basic"
  //           ) {
  //             return response // response stream consumed
  //           }

  //           // clone response stream
  //           // as stream once consumed, can not be used again
  //           var resCopy = response.clone()

  //           // ================== IN BACKGROUND ===================== //

  //           // add response to cache and return response
  //           caches.open(CACHE_NAME).then(function(cache) {
  //             return cache.put(reqCopy, resCopy) // reqCopy, resCopy streams consumed
  //           })

  //           // ====================================================== //

  //           return response // response stream consumed
  //         })
  //     }
  //   })
  // )
  var request = event.request
  // check if request
  if (request.url.indexOf("/assets/") > -1) {
    // contentful asset detected
    event.respondWith(
      caches.match(event.request).then(function(response) {
        // return from cache, otherwise fetch from network
        return response || fetch(request)
      })
    )
  }
})
// cache busting
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(CACHE_NAME) {
      return Promise.all(
        CACHE_NAME.map(function(cName) {
          if (cName !== CACHE_NAME) {
            return caches.delete(cName)
          }
        })
      )
    })
  )
})
