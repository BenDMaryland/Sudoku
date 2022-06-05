
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MazeCell from './MazeCell'


function MazeBoard() {

    const gridSize = 2500
    const columnSize = Math.sqrt(gridSize)
    const startingPos = Math.floor(Math.random() * gridSize)
    const endingPos = Math.floor(Math.random() * gridSize)


    const [mazeGrid, setMazeGrid] = useState([...Array(gridSize).keys()].map((cell, i) => cell = { path: false, endingPos: i === endingPos ? true : false, startingPos: i === startingPos ? true : false, num: i, block: Math.random() < 0.35 }))
    const [blocks, setblocks] = useState(220)
    const [pathsArray, setpathsArray] = useState([startingPos])

    const boardStyle = {
        'border': "solid",
        'display': "grid",
        'gridTemplateColumns': `repeat(${columnSize}, 1fr)`,
        'width': "fit-content",
        'height': "fit-content",
    }

    function mazeSolver() {
        let newPaths = [startingPos]

        let blockedArray = mazeGrid.filter(cell => (cell.block === true) && cell.block).map(cell => cell.num)



        for (let i = 1; i != columnSize * 2; i++) {



            newPaths = newPaths.map(cell => {
                let rightPath = cell + 1
                let leftPath = cell - 1
                let topPath = cell - (columnSize * 1)
                let bottomPath = cell + (columnSize * 1)

                return [cell, rightPath, leftPath, topPath, bottomPath]
            })

            newPaths = newPaths.flat().filter(cell => {
                if (blockedArray.includes(cell)) { return false }
                else if (cell < 0 || cell > gridSize) { return false }
                else { return true }
            })

            setMazeGrid(mazeGrid.map(cell => {
                if (newPaths.find(path => path == cell.num)) { cell.path = true }
                return cell
            }))

            newPaths = [...new Set(newPaths)]
            if (newPaths.find(cell => cell === endingPos)) { break }
        }
        setpathsArray([...new Set(newPaths)])
    }

    useEffect(() => {
        console.log(mazeGrid)
        setMazeGrid(grid => grid.map(cell => {
            if (cell !== undefined) {
                if (cell.num < columnSize) { cell.block = true }
                if (cell.num > gridSize - columnSize) { cell.block = true }
                if (cell.num % columnSize === 0) { cell.block = true }
                if (cell.num % columnSize === columnSize - 1) { cell.block = true }
            }
        }))
        // let rand = mazeGrid.filter(cell => (!cell.block)).map(cell => cell.num).map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)[0]
        // console.log(rand)

    }, [])

    useEffect(() => {
        mazeSolver()
    }, [])

    if (pathsArray.length === 1) return <div>s</div>

    return (

        <div>
            <input type={'number'} onChange={(e) => setblocks(e.target.value)}  ></input>
            <div style={boardStyle}>
                {mazeGrid.map((cell, i) => (<MazeCell cell={cell} key={i} cellNum={i} />))}
            </div>
        </div>
    )
}

export default MazeBoard

const FullMaze = styled.div`

display:grid ;


`