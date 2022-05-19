
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MazeCell from './MazeCell'


function MazeBoard() {

    const gridSize = 441
    const columnSize = Math.sqrt(gridSize)
    const startingpos = Math.floor(gridSize / 2)
    const [mazeGrid, setMazeGrid] = useState([...Array(gridSize).keys()])



    
    const boardStyle = {
        'border': "solid",
        'display': "grid",
        'gridTemplateColumns': `repeat(${columnSize}, 1fr)`,
        'width': "fit-content",
        'height': "fit-content",
    }



    return (
        <div style={boardStyle}>

            {mazeGrid.map((grid, i) => (<MazeCell key={i} cellNum={i}/>))}
        </div>
    )
}

export default MazeBoard

const FullMaze = styled.div`

display:grid ;


`