/**
 * function to show alert
 * @param {Boolean} show
 * @param {string} message support HTML
 */

let alertTimeout

const alert = (show = true, message = "") => {
  if (typeof window !== "undefined") {
    const el = document.getElementById("upstrak-global")
    //const elText = el.getElementsByClassName("toast__message")[0]

    if (show) {
      clearTimeout(alertTimeout)
      el.innerHTML = `<div class="toast" id="upstrak-toast">
      <div class="toast-message">${message}</div>
    </div> `
      /* auto close 2.5 seconds */
      alertTimeout = setTimeout(() => {
        var toast = document.getElementById("upstrak-toast")
        if (toast) {
          toast.remove()
        }
      }, 2500)
    } else {
      var toast = document.getElementById("upstrak-toast")
      if (toast) {
        toast.remove()
      }
    }
  }
}

export default alert
