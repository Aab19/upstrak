import Loadable from "react-loadable"
import Auth from "../modules/routerAuthorization"

// containers
import NotFound from "../containers/Errors/NotFound"

// async containers - to create new chunk file

const Profile = Loadable({
  loader: () => import("../containers/Profile/index"),
  loading: Loading
})


// layouts
import EmptyLayout from "../layouts/Empty"

// components
import Loading from "../components/loaders/PageLoading"

// routes
export default {
  path: "/:username",
  component: EmptyLayout,
  routes: [
    {
      path: "/:username",
      exact: true,
      component: Auth(Profile)
    },
    {
      path: "/:username/*",
      exact: true,
      notFound: true,
      component: NotFound
    }
  ]
}
