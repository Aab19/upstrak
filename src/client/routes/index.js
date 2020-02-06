import Loadable from "react-loadable"
import Auth from "../modules/routerAuthorization"

// containers
import NotFound from "../containers/Errors/NotFound"

// async containers - to create new chunk file

const Landing = Loadable({
  loader: () => import("../containers/Landing/index"),
  loading: Loading
})

const Login = Loadable({
  loader: () => import("../containers/Auth/Login"),
  loading: Loading
})

const Register = Loadable({
  loader: () => import("../containers/Auth/Register"),
  loading: Loading
})

const Home = Loadable({
  loader: () => import("../containers/Home/index"),
  loading: Loading
})

// layouts
import RootLayout from "../layouts/Root"

// components
import Loading from "../components/loaders/PageLoading"

// routes
import CourseRoutes from "./course"
import PurchaseRoutes from "./purchase"
import ProfileRoutes from "./profile"

export default [
  {
    component: RootLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Landing
      },
      {
        path: "/masuk",
        exact: true,
        component: Login
      },
      {
        path: "/daftar",
        exact: true,
        component: Register
      },
      {
        path: "/beranda",
        exact: true,
        component: Auth(Home)
      },

      // Course Routes
      CourseRoutes,
      // Purchase Routes
      PurchaseRoutes,
      // Profile Routes
      ProfileRoutes,

      // default page (return 404)
      {
        path: "*",
        state: { fullscreen: true },
        exact: true,
        component: NotFound
      }
    ]
  }
]
