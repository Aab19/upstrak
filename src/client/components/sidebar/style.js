import styled from "styled-components"

export const SidebarCourseStartStyle = styled.aside`
  position: fixed;
  height: 100vh;
  background: #714668;
  z-index: 90;
  padding: 20px 24px 20px 32px;
  width: 260px;

  .navbar-back__text {
    color: #fff !important;
  }

  .sidebar-container {
    overflow: auto;
    height: calc(100% - 80px);
    /* for firefox */
    scrollbar-color: transparent transparent;

    ::-webkit-scrollbar {
      display: none;
    }

    .sidebar-wrapper__list + .sidebar-wrapper__list {
      margin-top: 32px;
    }

    .sidebar__list {

      .sidebar__list-item {
        cursor: pointer;
        padding: 12px 24px;
        background: rgba(243, 240, 243, 0.1);
        border-radius: 4px;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        a:hover {
          color: #fff;
          opacity: 0.87;
        }
      }

      .sidebar__list-item.active {
        background: #f3f0f3;
        color: #714668;

        a {
          color: #714668;
          opacity: 0.87;
        }
      }

      .sidebar__list-item + .sidebar__list-item {
        margin-top: 8px;
      }
    }
  }
`
