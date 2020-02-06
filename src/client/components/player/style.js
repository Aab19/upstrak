import styled from "styled-components"

export const PlayerShimmerStyle = styled.div`
  background: #ffffff;
  box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.1);
  border-radius: 8px;
  padding: 24px 24px 82px 24px;
  position: relative;

  .shimmer:after {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(246, 62, 124, 0.2),
      transparent
    );
  }

  .player-content {
    background: #714668;
    border-radius: 8px;
    padding-bottom: 56.25%;
  }

  .player-control {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
