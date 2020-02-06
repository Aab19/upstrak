import styled from "styled-components"

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 24px;

  &:nth-child(1) {
    margin-top: 0;
  }

  &.input-grow {
    flex-grow: 1;
  }

  label {
    display: flex;
    margin: 0;
    color: #714668;
    font-size: 14px;
    margin-left: 16px;
    font-weight: 400;
    opacity: 0.87;
  }

  .text-input {
    margin-top: 12px;
    border-radius: 4px;
    padding: 18px 16px;
    font-size: 16px;
    color: #714668;
    border: 1px solid #efefef;
    outline: none;
    width: 100%;

    &::placeholder {
      color: #714668;
      opacity: 0.5;
    }
    &:focus {
      box-shadow: none;
      border: 1px solid #f63e7c;
    }
  }

  .input-success,
  .input-spinner,
  .input-error {
    position: absolute;
    bottom: 16px;
    right: 12px;
    height: 24px;
    width: 24px;
  }

  .input-spinner,
  .input-error {
    bottom: 19px;
  }
`
