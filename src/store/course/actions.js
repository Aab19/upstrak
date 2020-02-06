import { CALL_API } from "../middlewares/api"

export const COURSE_HOME = "COURSE_HOME"
export const DETAIL_COURSE = "DETAIL_COURSE"
export const COURSE_START = "COURSE_START"

export function getCourseHome() {
  return {
    [CALL_API]: {
      type: COURSE_HOME,
      filter: "course-home",
      method: "get",
      endpoint: `/api/home`
    }
  }
}

export function getContentCourse(params = {}) {
  return {
    [CALL_API]: {
      type: DETAIL_COURSE,
      filter: `detail-course__${params.course_id}`,
      params: params,
      method: "get",
      endpoint: `/api/course/${params.course_id}`
    }
  }
}

export function getCourseStart(params = {}) {
  return {
    [CALL_API]: {
      type: COURSE_START,
      filter: `course-start__${params.course_id}`,
      params: params,
      method: "get",
      endpoint: `/api/learn/${params.course_id}`
    }
  }
}
