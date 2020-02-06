import React, { Component } from "react"
import InputAlert from "./InputAlert"
import ValidateInput from "../../modules/validator-form/ValidateInput"
import PropTypes from "prop-types"
import { InputWrapper } from "./inputBase"
import Spinner from "../loaders/Spinner"
import memoize from "memoize-one"

var triggerTimeout = null

class InputCom extends Component {
  constructor(props) {
    super(props)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setInputState = this.setInputState.bind(this)
    this.setParentState = this.setParentState.bind(this)
    var obj = {}
    this.setParentState(obj)
    obj = this.setInputState(obj)
    this.state = obj
  }

  static propTypes = {
    refs: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    allowSubmit: PropTypes.func,
    label: PropTypes.string,
    isLoading: PropTypes.bool,
    validate: PropTypes.array
  }

  static defaultProps = {
    type: "text",
    label: "input",
    onKeyDown: () => {}
  }

  componentDidUpdate() {
    this.onValidateInput(this.state.text)
  }

  onValidateInput = memoize(text => {
    if (triggerTimeout !== null) {
      clearTimeout(triggerTimeout)
    }
    var _this = this
    triggerTimeout = setTimeout(() => {
      if (_this.props.allowSubmit) {
        this.props.allowSubmit(_this.props.id, text, this.state[this.props.id])
      }
    }, 1000)
  })

  UNSAFE_componentWillReceiveProps(data) {
    var obj
    obj = {}
    this.props = data
    this.setParentState(obj)
    this.setState(obj)
    if (data.isSubmit) {
      return ValidateInput(
        this,
        data.id,
        data.value,
        data.validate,
        data.label,
        data.equalWith,
        this.props.message
      )
    }
  }
  setInputState(obj) {
    obj.isFocus = false
    obj.validate = false
    obj.type = this.props.type
    obj.text = this.props.value[this.props.id]
    obj.countCharacter = this.props.value[this.props.id].length
    obj[this.props.id] = false
    return obj
  }

  setParentState(obj) {
    if (typeof this.props.value[this.props.id] === "undefined") {
      return (this.props.value[this.props.id] = "")
    } else {
      return (obj.text = this.props.value[this.props.id])
    }
  }

  handleBlur() {
    this.props.value.validate = true
    ValidateInput(
      this,
      this.props.id,
      this.props.value,
      this.props.validate,
      this.props.label,
      this.props.equalWith,
      this.props.message
    )
    this.setState({
      isFocus: false
    })
  }

  handleClick() {
    this.setState({
      isFocus: true
    })
    if (this.props.onclick) {
      this.props.onclick()
    }
  }

  handleChange(event) {
    var text = event.target.value
    if (
      this.props.listenValue &&
      !this.state[this.props.id] &&
      text.length > 1
    ) {
      this.props.listenValue(event.target.value, event.target.id)
    }
    if (parseInt(this.props.maxLength) > 0) {
      this.updateCountCharacter(event)
    }
    this.props.value[event.target.id] = event.target.value
    this.setState({
      text: event.target.value
    })
    if (this.props.handleChange) {
      this.props.handleChange()
    }
    ValidateInput(
      this,
      this.props.id,
      this.props.value,
      this.props.validate,
      this.props.label,
      this.props.equalWith,
      this.props.message
    )
  }

  inputPrefixed() {
    return (
      <span
        className={
          this.state[this.props.id]
            ? "input-prefixed__prefix input-prefixed__prefix--error"
            : "input-prefixed__prefix"
        }>
        {this.props.prefixed}
      </span>
    )
  }

  onKeyDown(e) {
    if (e.keyCode === 13 && !this.state[this.props.id]) {
      var el = document.getElementById(this.props.id)
      el.blur()
      this.props.value.validate = true
      ValidateInput(
        this,
        this.props.id,
        this.props.value,
        this.props.validate,
        this.props.label,
        this.props.equalWith,
        this.props.message
      )
    }
    this.props.onKeyDown(e, this.props.id, this.state.text)
  }

  updateCountCharacter = e => {
    this.setState({ countCharacter: e.target.value.length })
  }

  render() {
    let initialCountValue = 0
    if (this.state.text) {
      initialCountValue = this.state.text.length
    }
    return (
      <InputWrapper
        className={`${
          this.props.containerClass ? this.props.containerClass : ""
        } ${
          this.state[this.props.id] ||
          (this.props.value.error && this.props.value.error[this.props.id])
            ? "has-error"
            : this.props.containerClass
            ? this.props.containerClass
            : ""
        } `}>
        {this.props.prefixed ? this.inputPrefixed() : ""}
        {this.props.noLabel ? null : (
          <label
            className={`text-input__placeholder ${
              this.state.isFocus || this.state.text !== ""
                ? "text-input__placeholder-valid"
                : ""
            }`}>
            {this.props.label}
          </label>
        )}
        {this.props.maxLength ? (
          <div className="form-horizontal__helper form-count-info">
            {this.state.countCharacter === 0
              ? initialCountValue
              : this.state.countCharacter}
            /{this.props.maxLength}
          </div>
        ) : null}
        {this.props.searchIcon ? (
          <img
            className="search-icon"
            src="/assets/img/icons/ic-search.svg"
            alt=""
          />
        ) : null}
        <input
          ref={this.props.refs}
          id={this.props.id}
          autoComplete={this.props.type == "password" ? "off" : "on"}
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onClick={() => this.handleClick()}
          disabled={this.props.disabled}
          readOnly={this.props.readonly}
          maxLength={this.props.maxLength ? this.props.maxLength : 1000}
          autoFocus={this.props.focus ? true : false}
          onKeyDown={this.props.onKeyDown ? e => this.onKeyDown(e) : () => {}}
        />
        {this.props.isLoading ? (
          <div className="input-spinner">
            <Spinner />
          </div>
        ) : null}
        {this.props.isSuccess && !this.state[this.props.id] ? (
          <div className="input-success">
            <img src="/assets/img/icons/ic-check.svg" alt="Icon Check" />
          </div>
        ) : null}
        {this.props.type === "password" ? (
          <div
            className="input-success"
            onClick={() =>
              this.setState({
                type: this.state.type === "password" ? "text" : "password"
              })
            }>
            {/* <img
								src={`/assets/img/icons/ic_${this.state.type === 'password' ? 'hide' : 'show'}.svg`}
								alt="Icon Show"
							/> */}
          </div>
        ) : null}
        {this.props.addAnswer ? (
          <div className="text-add__answer">Tambah jawaban</div>
        ) : null}
        {this.state[this.props.id] ||
        (this.props.value.error && this.props.value.error[this.props.id]) ? (
          <React.Fragment>
            <InputAlert
              message={
                this.props.value.error && this.props.value.error[this.props.id]
                  ? this.props.value.error[this.props.id]
                  : this.state.message
              }
            />
            <div className="input-error">
              <img src="/assets/img/icons/ic-error.svg" alt="Icon Check" />
            </div>
          </React.Fragment>
        ) : null}
      </InputWrapper>
    )
  }
}

export default InputCom
