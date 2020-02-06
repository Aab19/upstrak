import { receiveData } from "../modules/handleData"
import { COURSE_HOME, DETAIL_COURSE, COURSE_START } from "./actions"

export default (state = {}, action) => {
  switch (action.type) {
    case COURSE_HOME:
      return receiveData(state, action)
    case DETAIL_COURSE:
      return receiveData(state, action)
    case COURSE_START:
      return receiveData(state, action)
    default:
      return state
  }
}
