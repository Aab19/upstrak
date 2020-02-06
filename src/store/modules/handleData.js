export function receiveData(state, action) {
  if (action.json) {
    if (!state[action.filter]) state[action.filter] = {}
    if (action.options && action.options.toast) {
      if (action.json.message && !action.options.message) {
        toast(true, action.json.message)
      } else if (action.options.message) {
        toast(true, action.options.message)
      }
    }
    //received data
    state[action.filter].in_progress = false
    return Object.assign({}, state, { [action.filter]: action.json })
  } //waiting
  else {
    if (!state[action.filter]) state[action.filter] = {}
    state[action.filter].in_progress = true
    return Object.assign({}, state)
  }
}
