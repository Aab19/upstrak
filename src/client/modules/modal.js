/**
 * function to show modal
 * @param {string} id  string
 * @param {string} params.display one of block (default), flex
 */
export function openModal(id, params = { display: "block" }) {
  // disable body scroll
  document.body.style.overflow = "hidden"
  var el = document.getElementById(id)
  el.style.display = params.display
}

/**
 * function to hide modal from any component
 * @param {*} id  string
 */
export function closeModal(id) {
  var el = document.getElementById(id)
  if (el) {
    window.hideModalContent()
    el.style.display = "none"
    // enable body scroll
    document.body.style.overflow = "auto"
  }
}

/**
 * function to hide modal if click overlay
 * @param {*} event
 */
export function close(event) {
  if (
    event.target.className.indexOf("upstrak-modal") === 0 &&
    event.target.className.indexOf("no-close") < 0
  ) {
    window.hideModalContent()
    // enable body scroll
    document.body.style.overflow = "auto"
    // hide the modal
    event.target.style.display = "none"
  }
}
