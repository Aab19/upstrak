export default {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  setStringItem(key, value) {
    localStorage.setItem(key, value)
  },
  getItem(key) {
    return localStorage.getItem(key)
  },
  removeItem(key) {
    return localStorage.removeItem(key)
  }
}
