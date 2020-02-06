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

const CourseStart = Loadable({
  loader: () => import("../containers/Course/Start"),
  loading: Loading
})

// layouts
import EmptyLayout from "../layouts/Empty"

// components
import Loading from "../components/loaders/PageLoading"

// routes
export default {
  path: "/kursus",
  component: EmptyLayout,
  routes: [
    {
      path: "/kursus/kursus-ku",
      exact: true,
      component: Auth(MyCourse)
    },
    {
      path: "/kursus/:encrypt",
      exact: true,
      component: Auth(DetailCourse)
    },
    {
      path: "/kursus/:encrypt/:slug/start/:order",
      exact: true,
      component: Auth(CourseStart)
    }
  ]
}
