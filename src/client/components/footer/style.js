import styled from "styled-components"

const FooterStyle = styled.footer`
  background: #ffffff;
  border-top: 1px solid rgba(113, 70, 104, 0.2);
  padding: 80px 80px 40px 80px;
  margin-top: 64px;

  .footer-brand {
    .footer-brand__logo {
      display: flex;
      align-items: center;

      img {
      }

      .title {
        font-weight: 600;
        font-size: 24px;
        color: #714668;
      }
    }
  }

  .footer-slag {
    opacity: 0.87;
  }

  .footer-info,
  .footer-help,
  .footer-social {
    .footer-info__header,
    .footer-help__header,
    .footer-social__header {
      font-size: 18px;
    }

    .footer-info__list,
    .footer-help__list,
    .footer-social__list {
      list-style: none;
      margin: 0;
      padding: 0;

      .footer-info__list-item,
      .footer-help__list-item,
      .footer-social__list-item {
        margin-top: 16px;
      }

      .footer-help__list-item,
      .footer-social__list-item {
        a {
          color: #714668;
        }
      }
    }
  }

  .footer-copyright {
    margin-top: 100px;
  }

  /* Footer Responsive */
  @media screen and (max-width: 767px) {
    .footer-info,
    .footer-help,
    .footer-social {
      margin-top: 40px;
    }
  }
`

export default FooterStyle
