/**
 * function to show alert
 * @param {*} config  object
 * 
 */

// {
//   text: "Kata sandimu berhasil diubah",
//   confirmText: "OKE",
//   noCancel: true,
//   confirm: () => {
//     window.location.href = "/"
//   }
// }
export default function alert(config) {
  if (config.confirm) {
    window.confirmModal = function () {
      var alert = document.getElementById("alert")
      alert.remove()
      config.confirm()
    }
  }

  var el = document.getElementById("upstrak-global")
  el.innerHTML += `<div id="alert">
  <div class="alert-dialog-mask alert-dialog-mask--material" />
  <div class="alert-dialog alert-dialog--material">
    <div class="alert-dialog-container alert-dialog-container--material">
    ${config.title ? ` <div class="alert-dialog-title alert-dialog-title--material">
    ${config.title}
    </div>` : ''} 
      <div class="alert-dialog-content alert-dialog-content--material">
      ${config.text}
      </div>
      <div class="alert-dialog-footer alert-dialog-footer--material">
        ${config.confirm ? `<button onclick="window.confirmModal()" class="alert-dialog-button alert-dialog-button--material">${config.confirmText}</button>` : ''}
        ${!config.noCancel ? `<button class="alert-dialog-button alert-dialog-button--material" onclick="window.closeAlert()">${config.cancelText}</button>` : ''}
      </div>
    </div>
  </div>
</div>
`
}


