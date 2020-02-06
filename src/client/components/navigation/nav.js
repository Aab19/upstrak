import styled from "styled-components"

const Nav = styled.nav`
  width: 100%;
  background: transparent;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-logo {
    display: flex;
    align-items: center;
    color: #714668;

    .title {
      margin-left: 12px;
      font-weight: 600;
    }
  }

  .navbar-toggle {
    padding: 12px;
    background-color: transparent;
    display: none;
  }

  .navbar-right {
    display: flex;
    height: fit-content;

    ul.navbar-list {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;

      li.navbar-list__item {
        display: flex;
        align-items: center;

        a {
          color: #714668;
          font-weight: 500;
        }

        .btn-nav {
          padding: 8px 24px;
        }

        img.navbar-list__item-avatar {
          width: 32px;
          height: 32px;
          margin-left: 16px;
        }
      }

      li.navbar-list__item.active {
        a {
          position: relative;

          &:before {
            content: "";
            height: 2px;
            width: 24px;
            background: #714668;
            position: absolute;
            right: 0;
            bottom: -4px;
            border-radius: 2px;
            display: flex;
          }
        }
      }

      li.navbar-list__item.active.dropbtn {
        &:before {
          content: "";
          height: 2px;
          width: 24px;
          background: #714668;
          position: absolute;
          right: 48px;
          bottom: -4px;
          border-radius: 2px;
          display: flex;
        }
      }

      li.navbar-list__item + li.navbar-list__item {
        margin-left: 40px;
      }
    }

    .navbar-list {
      .dropdown {
        margin-left: 40px;

        .dropdown__menu {
          li {
            border-bottom: 1px solid rgba(113, 70, 104, 0.1);
            padding: 16px 24px;
          }

          li a.violet {
            &:hover {
              color: #714668;
            }
          }

          li:last-child {
            border: none;
          }
        }
      }
    }
  }

  .navbar-mobile {
    display: flex;
    position: fixed;
    justify-content: flex-end;
    z-index: 200;
    top: 0;
    bottom: 0;
    right: -200px;
    background: #f3f0f3;
    box-shadow: -8px 14px 40px rgba(113, 70, 104, 0.2);
    width: 200px;
    padding: 100px 16px 24px 16px;
    transition: all 0.2s ease-in-out;

    .navbar-mobile__close {
      position: absolute;
      top: 35px;
    }

    ul.navbar-mobile__list {
      text-align: right;

      li.navbar-mobile__list-item {
        a {
          color: #714668;
          font-weight: 500;
        }

        a.pink {
          color: #f63e7c;
        }

        .navbar-mobile__logout {
          position: absolute;
          right: 16px;
          bottom: 24px;
        }
      }

      li.navbar-mobile__username {
        position: absolute;
        right: 16px;
        bottom: 68px;
        margin-top: 0 !important;
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        align-items: flex-end !important;

        img {
          margin-bottom: 8px;
        }
      }

      li.navbar-mobile__list-item.active {
        a {
          position: relative;

          &:before {
            content: "";
            height: 2px;
            width: 24px;
            background: #714668;
            position: absolute;
            right: 0;
            bottom: -8px;
            border-radius: 2px;
            display: flex;
          }
        }
      }

      .navbar-mobile__list-item + .navbar-mobile__list-item {
        margin-top: 40px;
      }
    }
  }

  /* Navigation Responsive */
  @media screen and (max-width: 767px) {
    .navbar-right {
      display: none;
    }

    .navbar-toggle {
      display: flex;
    }
  }
`

export const Back = styled.div`
  .navbar-back {
    display: flex;
    cursor: pointer;

    .navbar-back__arrow {
    }

    .navbar-back__text {
      color: #f63e7c;
      margin-left: 16px;
      font-weight: 600;
    }
  }
`

export default Nav
