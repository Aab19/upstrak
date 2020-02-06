import Loadable from "react-loadable"
import Auth from "../modules/routerAuthorization"

// async containers - to create new chunk file

const MyCourse = Loadable({
  loader: () => import("../containers/Course/MyCourse"),
  loading: Loading
})

const DetailCourse = Loadable({
  loader: () => import("../containers/Course/Detail"),
  loading: Loading
})

const Purchase = Loadable({
  loader: () => import("../containers/Purchase/index"),
  loading: Loading
})

const PaymentGuide = Loadable({
  loader: () => import("../containers/Purchase/Panduan"),
  loading: Loading
})

// layouts
import EmptyLayout from "../layouts/Empty"

// components
import Loading from "../components/loaders/PageLoading"

// routes
export default {
  path: "/pembelian",
  component: EmptyLayout,
  routes: [
    {
      path: "/pembelian",
      exact: true,
      component: Auth(Purchase)
    },
    {
      path: "/pembelian/panduan",
      exact: true,
      component: Auth(PaymentGuide)
    }
  ]
}
