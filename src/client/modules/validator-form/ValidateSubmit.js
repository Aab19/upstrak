const Submit = {
  init: function(self) {
    return self.setState({
      validate: true
    })
  },
  ValidateSubmit: function(self) {
    if (self.state.validate && self.state.isSubmit) {
      self.setState({
        validate: true,
        isSubmit: false
      })
      return true
    }
  },
  doSubmit: function(e, self) {
    e.preventDefault()
    self.setState({
      isSubmit: true
    })
  }
}

export default Submit
