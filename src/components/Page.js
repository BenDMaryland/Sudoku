import React from 'react'
import Board from './sudoku/Board'
import { Routes, Route, Link } from "react-router-dom"
import Snake from './snake/Snake'
import MazeBoard from './MazeSolver/MazeBoard'

function Page() {

  const PageStyle = {
    'display': 'flex',
    "height": "100vh",
    'width': '100vw',
    'justifyContent': 'center',
    'alignItems': 'center',


  }
  return (
    <div style={PageStyle}>
      <h1></h1>

      <Link className="nav-link" to="/"><button color="inherit">Sudoku</button></Link>
      <Link className="nav-link" to="/snake"><button color="inherit">Snake</button></Link>
      <Link className="nav-link" to="/maze"><button color="inherit">Maze</button></Link>
      
      <Routes>
        <Route exact path='/snake' element={<Snake />} />
        <Route exact path='/maze' element={<MazeBoard />} />
        <Route path='/*' element={<Board />} />
      </Routes>




    </div>
  )
}

export default Page