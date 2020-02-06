import styled from "styled-components"

export const PopupWelcomeStyle = styled.div`
  .modal-content__box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    touch-action: none !important;

    .glide,
    .glide__slides,
    .glide__slide,
    .modal-btn {
      touch-action: none;
    }

    .glide__slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      touch-action: none;
    }

    .glide__slide .field-wrapper {
      padding: 0 80px;
    }

    .modal-btn {
      padding: 20px 62px;
    }
  }
`
