import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SnakeCell from "./SnakeCell"

function Snake() {
  const gridSize = 225
  let columnSize = Math.sqrt(gridSize)
  
const [player, setplayer] = useState("[Player]")
  const [snakeGrid, setsnakeGrid] = useState([...Array(gridSize).keys()])
  

  // useEffect(() => {
  // setsnakeGrid(snake=>snake =Array(81).keys())
  // }, [])
  
  const boardStyle = {
  

    
}


  console.log("the grid is ", snakeGrid)

  return (
    <>
      
    <SnakeBoard>

{snakeGrid.map((grid,i )=>  (<SnakeCell cellNumber={i} />))}


    </SnakeBoard>
    
    </>
  )
}

export default Snake

const SnakeBoard =styled.div`
border: solid;
display: grid;
grid-template-columns: repeat(15, 1fr);
width: fit-content;
height: fit-content;
`