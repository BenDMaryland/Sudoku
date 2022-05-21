
import React, { useEffect, useState } from "react"

import styled from "styled-components"

function SnakeCell({ cellNumber, player, playerFollower, snakeFood }) {
  const cellSize = "30px"
  const [playerTile, setplayerTile] = useState("white")



  useEffect(() => {


    if (player === cellNumber) { setplayerTile("red") }
    else if (playerFollower.includes(cellNumber)) { setplayerTile("green") }
    else if (cellNumber === snakeFood) { setplayerTile("yellow") }
    else if (cellNumber %2 ===0){ setplayerTile("#1e2834") }
    else { setplayerTile("#4a6280") }



  }, [player])



  const cellStyle = {
    "margin": "0",
    'border': 'solid',
    'height': cellSize,
    "width": cellSize,
    "backgroundColor": playerTile


  }

  return (
    <div style={cellStyle}> </div>
  )
}

export default SnakeCell