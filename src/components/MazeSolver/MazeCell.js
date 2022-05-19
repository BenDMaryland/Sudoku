import React from 'react'

function MazeCell({ i, cellNum }) {
    const cellSize = "30px"

    const cellStyle = {
        "margin": "0",
        'border': 'solid',
        'height': cellSize,
        "width": cellSize,
    }



    return (
        <div style={cellStyle}>{cellNum}</div>
    )
}

export default MazeCell