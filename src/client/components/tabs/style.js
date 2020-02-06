import styled from "styled-components"

export const TabsWrapper = styled.div`
  .tab {
    display: inline-flex;
    cursor: pointer;
    color: #714668;
    position: relative;
    font-size: 18px;
    font-weight: 600;
    background: transparent;
    padding: 8px 0px 12px 0;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;

    &.active {
      opacity: 1;
      color: #714668;
      border-bottom: 4px solid #714668;
    }
  }

  .tab-pills {
    border-bottom: 1px solid rgba(113, 70, 104, 0.1);
  }

  .tab + .tab {
    margin-left: 40px;
  }

  .tab-content {
    margin-top: 24px;
    transition: all 0.3s ease-in-out;
  }

  p {
    opacity: 0.87;
    line-height: 30px;
  }
`
