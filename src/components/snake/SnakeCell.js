import { tSModuleDeclaration } from "@babel/types"
import React, { useEffect, useState } from "react"
import { unstable_shouldYield } from "scheduler"
import styled from "styled-components"

function SnakeCell({ cellNumber, player, playerFollower, snakeFood }) {
  const cellSize = "30px"
  const [playerTile, setplayerTile] = useState("white")



  useEffect(() => {


    if (player === cellNumber || playerFollower.includes(cellNumber)) { setplayerTile("green") }
    else if (cellNumber === snakeFood) { setplayerTile("yellow") }
    else { setplayerTile("white") }




  }, [player])



  const cellStyle = {
    "margin": "0",
    'border': 'solid',
    'height': cellSize,
    "width": cellSize,
    "backgroundColor": playerTile


  }

  return (
    <div style={cellStyle}>{cellNumber} </div>
  )
}

export default SnakeCell