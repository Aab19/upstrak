import validator from "validator"
const valid = {
  preMessage: "",
  midMessage: "",
  self: "",
  state: "",
  inputName: "",
  message: "",
  equal: "",
  customMessage: "",
  param: "",
  saveState: function (inputName, state, message, alertType) {
    var objState
    objState = {}
    objState[inputName] = !state
    objState.alertType =
      alertType === 0
        ? "errorMessage"
        : alertType === 1
          ? "successMessage"
          : void 8
    objState.message = message
    this.self.setState(objState)
    return state
  },
  required: function () {
    this.message = this.customMessage && this.customMessage['required'] ? this.customMessage['required'] : `Wajib diisi`
    return this.saveState(
      this.inputName,
      Boolean(this.state[this.inputName].toString().trim()),
      this.message,
      0
    )
  },
  email: function () {
    this.message = this.customMessage && this.customMessage['email'] ? this.customMessage['email'] : `Format email salah`
    return this.saveState(
      this.inputName,
      validator.isEmail(this.state[this.inputName]),
      this.message,
      0
    )
  },
  equals: function () {
    if (this.state[this.equal].trim()) {
      this.message = this.customMessage && this.customMessage['equals'] ? this.customMessage['equals'] : `${this.preMessage} tidak sama`
      return this.saveState(
        this.inputName,
        validator.equals(this.state[this.inputName], this.state[this.equal]),
        this.message,
        0
      )
    }
  },
  length: function () {
    if (typeof this.param.max !== "undefined") {
      this.message = this.message = this.customMessage && this.customMessage['length'] ? this.customMessage['length'] : `${this.midMessage} antara ${this.param.min} - ${
        this.param.max
        } karakter`
      return this.saveState(
        this.inputName,
        validator.isLength(
          this.state[this.inputName],
          this.param.min,
          this.param.max
        ),
        this.message,
        0
      )
    } else {
      this.message = this.customMessage && this.customMessage['length'] ? this.customMessage['length'] : `${this.preMessage} terlalu pendek`
      return this.saveState(
        this.inputName,
        validator.isLength(this.state[this.inputName], this.param.min),
        this.message,
        0
      )
    }
  },
  phone: function () {
    this.message = this.customMessage && this.customMessage['phone'] ? this.customMessage['phone'] : "hanya format no telepon yang di perbolehkan"
    if (this.state[this.inputName]) {
      var telp = this.state[this.inputName]
      var firstChar = telp.substring(0, 1)
      if (firstChar === "+") {
        telp = telp.slice(1)
      }
      return this.saveState(
        this.inputName,
        validator.isNumeric(telp),
        this.message,
        0
      )
    } else {
      return this.saveState(this.inputName, true, this.message, 0)
    }
  },
  number: function () {
    this.message = this.customMessage && this.customMessage['number'] ? this.customMessage['number'] : "hanya nomor"
    return this.saveState(
      this.inputName,
      validator.isNumeric(this.state[this.inputName]),
      this.message,
      0
    )
  },
  between: function () {
    var val
    if (
      this.state[this.inputName] < this.param.min ||
      this.state[this.inputName] > this.param.max
    ) {
      val = false
    } else {
      val = true
    }
    this.message = this.customMessage && this.customMessage['between'] ? this.customMessage['between'] : `${this.preMessage} between ${this.param.min} ${
      this.param.max
      }`
    return this.saveState(this.inputName, val, this.message, 0)
  },
  onlytext: function () {
    var str = this.state[this.inputName]
    var val
    if (str.match(/^[a-zA-Z0-9_]+$/)) {
      val = true
    } else {
      val = false
    }
    this.message = this.customMessage && this.customMessage['onlytext'] ? this.customMessage['onlytext'] : "hanya huruf dan angka (a-z, 0-9)"
    return this.saveState(this.inputName, val, this.message, 0)
  }
}

export default valid
