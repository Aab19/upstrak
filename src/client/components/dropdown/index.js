import styled from 'styled-components'

export const Dropdown = styled.div`
  position: relative;

  .dropdown {
    position: relative;
    z-index: unset;
    cursor: pointer;
  }

  &.dropdown-inline {
    position: relative;
    display: inline-flex;
  }

  .dropdown__menu {
    transition: all 0.3s ease;
    position: absolute;
    top: 100%;
    border-radius: 3px 3px 0 0;
    background-color: #fff;
    z-index: 1000;
    /* height: 0; */
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    overflow: auto;
    box-shadow: 8px 16px 40px rgba(0, 0, 0, 0.06);
    top: 40px;
    right: 0;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;

  }

  .dropdown__toggle {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  a {
    width: 100%;
    display: block;
  }

`

export default Dropdown
