import React from 'react'
import Board from './sudoku/Board'
import { Routes, Route, Link } from "react-router-dom"
import Snake from './snake/Snake'
import MazeBoard from './MazeSolver/MazeBoard'

function Page() {

  const PageStyle = {
  
    "height": "100vh",
    'width': '100vw',
  }

//testing
  return (
    <div style={PageStyle}>
      <h1></h1>

      <Link className="nav-link" to="/Sudoku"><button color="inherit">Sudoku</button></Link>
      <Link className="nav-link" to="/Sudoku/snake"><button color="inherit">Snake</button></Link>
      <Link className="nav-link" to="/Sudoku/maze"><button color="inherit">Maze</button></Link>

      <Routes>
        <Route exact path='/Sudoku/snake' element={<Snake />} />
        <Route exact path='/Sudoku/maze' element={<React.StrictMode><MazeBoard /></React.StrictMode>} />
        <Route path='/Sudoku' element={<Board />} />
      </Routes>




    </div>
  )
}

export default Page