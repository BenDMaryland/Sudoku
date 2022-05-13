import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SnakeCell from "./SnakeCell"



function Snake() {
  const gridSize = 225
  let columnSize = Math.sqrt(gridSize)
  
const [player, setplayer] = useState(112)
  const [snakeGrid, setsnakeGrid] = useState([...Array(gridSize).keys()])
  
  
  const boardStyle = {
    'border': "solid",
    'display': "grid",
    'gridTemplateColumns': `repeat(${columnSize}, 1fr)`,
    'width': "fit-content",
    'height': "fit-content",
  }


  function movePlayer(e) {
  
console.log("Keypress",e.target.value)

}



  return (
    <>
      
    <div onKeyDown={(e)=>movePlayer(e)} style={boardStyle}>

{snakeGrid.map((grid,i )=>  (<SnakeCell key={i} player={player} cellNumber={i} />))}


    </div>
    
    </>
  )


  
}

export default Snake
