import React from "react"
import { PlayerShimmerStyle } from "../style"

const PlayerShimmer = props => {
  return (
    <PlayerShimmerStyle>
      <div className="player-content shimmer-pink"></div>
      <div className="player-control shimmer-pink"></div>
    </PlayerShimmerStyle>
  )
}

export default PlayerShimmer
