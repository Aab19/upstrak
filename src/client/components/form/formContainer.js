import styled from "styled-components"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  .form-title {
    font-size: 36px;
    font-weight: bold;
    margin-top: 30px;
  }

  .form-desc {
    margin-top: 16px;
    font-size: 18px;
  }

  .form-group.form-check {
    margin: 18px 5px 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .form-check-input {
    position: absolute;
    height: 16px;
    width: 16px;
    left: 0;
    margin: 0;
  }

  .form-check-label {
    margin-left: 25px;
  }

  .auth-action {
    display: flex;
    flex-direction: column;
    margin-top: 32px;


    .btn-login,.btn-register {
      padding: 18px 0;
    }

    .forgot-password {
      margin-top: 16px;
      text-align: center;
      text-decoration: underline;
    }

    span {
      color: rgba(0, 0, 0, 0.3);
      margin: 0 18px;
    }

  }

`
