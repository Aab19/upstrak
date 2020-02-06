import styled from "styled-components"

const CardStyle = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.06);
  padding: 16px;
  margin-bottom: 40px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.12);
    transition: all 0.4s ease;
    transform: translate3D(0, -7px, 0);
  }

  .card-image {
    background-size: cover;
    border-radius: 8px;
    padding-bottom: 56.25%;
    position: relative !important;

    &:hover {
      .overlay-card-image {
        opacity: 0.7;
        transition: all 0.3s ease-in-out 0s;
      }
    }

    .overlay-card-image {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #714668 !important;
      border-radius: 8px;
      display: flex;
      opacity: 0;
      transition: all 0.3s ease-in-out 0s;
    }
  }

  .card-title {
    font-size: 20px;
    font-weight: 600;
  }

  .card-progress-wrapper {
    progress {
      width: 100%;
      background: rgba(113, 70, 104, 0.1);
      border-radius: 6px;
      height: 8px;
    }

    progress::-webkit-progress-value {
      background: #714668;
      border-radius: 6px;
    }

    progress::-webkit-progress-bar {
      background: rgba(113, 70, 104, 0.1);
      border-radius: 6px;
    }

    .card-progress__number {
      margin-left: 24px;
    }
  }

  .separator {
    margin-top: 24px;
    margin-bottom: 20px;
    background: #714668;
    opacity: 0.1;

    &.bottom {
      margin-top: 20px;
      margin-bottom: 16px;
    }
  }

  .card-spec {
    display: flex;
    justify-content: space-between;

    .card-spec__detail {
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }

  .card-info {
    display: flex;
    justify-content: space-between;

    .card-info__user {
      display: flex;
      align-items: center;

      .card-info__user-avatar {
        width: 36px;
        height: 36px;
        object-fit: cover;
        border-radius: 50%;
      }

      .card-info__user-fullname {
        font-weight: 600;
        font-size: 14px;
        margin-left: 8px;
      }
    }

    .card-info__rating {
      display: flex;
      align-items: center;

      .card-info__rating-number {
        font-weight: 600;
      }
    }
  }
`

export const CardShimmerStyle = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.1);
  padding: 16px;
  margin-bottom: 40px;
  overflow: hidden;
  -webkit-transition: ease box-shadow 0.3s;
  transition: ease box-shadow 0.3s;

  .card-image {
    background-size: cover;
    border-radius: 8px;
    padding-bottom: 56.25%;
  }

  .card-category,
  .card-title {
    height: 24px;
    border-radius: 24px;
  }

  .card-category {
    width: calc(100% - 50px);
  }

  .card-title {
    width: calc(100% - 150px);
  }

  .card-progress {
    height: 16px;
    width: 100%;
    margin-top: 45px;
    border-radius: 27px;
  }

  .card-spec__detail .title {
    height: 16px;
    border-radius: 24px;
    width: 80px;
  }

  .card-spec__detail .title-second {
    height: 16px;
    border-radius: 24px;
    width: 103px;
  }

  .card-info__user-fullname,
  .card-info__rating-number {
    height: 16px;
    border-radius: 24px;
  }

  .card-info__user-fullname {
    width: 114px;
  }

  .card-info__rating-number {
    width: 48px;
  }
`

export default CardStyle
