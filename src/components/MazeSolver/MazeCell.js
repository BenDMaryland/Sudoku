import React, { useEffect, useState } from 'react'

function MazeCell({ i, cellNum, cell }) {
    const cellSize = "30px"
    const [color, setcolor] = useState("white")

    useEffect(() => {

 

        if (cell.startingPos) { setcolor("blue") }
        else if(cell.endingPos){setcolor("green")}
        else if (cell.path) { setcolor("lightBlue") }
        else if (cell.block) { setcolor("black") }
        else {  setcolor("white")   }
    }, [])


    const cellStyle = {
        "margin": "0",
        'border': ` solid ${color}`,
        'height': cellSize,
        "width": cellSize,
        "backgroundColor": color
    }



    return (
        <div style={cellStyle}>{cellNum}</div>
    )
}

export default MazeCell