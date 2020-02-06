import Validator from "./index"

var isValid = function(
  self,
  type,
  state,
  inputName,
  message,
  equal,
  customMessage,
  param
) {
  var validate
  validate = Object.create(Validator)
  validate.preMessage =
    message.charAt(0).toUpperCase() + message.toLowerCase().slice(1)
  validate.midMessage = message
  validate.self = self
  validate.state = state
  validate.inputName = inputName
  validate.message = message
  validate.equal = equal
  validate.customMessage = customMessage
  validate.param = param
  return validate[type]()
}

var ValidateInput = function(
  self,
  type,
  state,
  rule,
  message,
  equal,
  customMessage
) {
  var me
  me = []
  me.valid = true
  if (typeof rule !== "undefined") {
    rule.map(function(val) {
      var idx
      if (!me.valid) {
        return
      }
      if (typeof val === "object") {
        if (val.length && val.length.empty && state[type] == "") {
          return true
        }
        idx = Object.keys(val).toString()
        return (me.valid = isValid(
          self,
          idx,
          state,
          type,
          message,
          equal,
          customMessage,
          val[idx]
        ))
      } else {
        return (me.valid = isValid(
          self,
          val,
          state,
          type,
          message,
          equal,
          customMessage
        ))
      }
    })
  }
  return (state.validate = state.validate && me.valid)
}

export default ValidateInput
