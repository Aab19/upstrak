import styled from "styled-components"

export const FieldInterestStyle = styled.div`
  width: 100%;

  &.field-wrapper + &.field-wrapper {
    margin-top: 24px;
  }

  span {
    opacity: 0.5;
  }

  span.active {
    opacity: 1;
  }

  .field-input {
    position: relative;
    border: 1px solid #efefef;
    border-radius: 4px;
    padding: 16px;
    width: 100%;
  }

  .field-input + .field-input {
    margin-top: 24px;
  }

  .dropdown {
    position: absolute;
    top: -36px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    height: 53px;

    .dropdown-content {
      left: -16px;
      right: -16px;
      top: 53px;
      max-height: 220px;
      /* for firefox */
      scrollbar-color: transparent transparent;

      ::-webkit-scrollbar {
        display: none;
      }

      li {
        padding: 18px 16px;

        &:hover {
          background: rgba(113, 70, 104, 0.06);
        }
        a {
          color: #714668;
          opacity: 0.87;
        }
      }
    }
  }
`
