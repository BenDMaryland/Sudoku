import React from 'react'
import Board from './Board'
import { Routes, Route,Link } from "react-router-dom"
import Snake from './Snake'


function Page() {
  return (
    <div>
      <h1></h1>
      <Link className="nav-link" to="/"><button color="inherit">Sudoku</button></Link>
      <Link className="nav-link" to="/snake"><button color="inherit">Snake</button></Link>
      <Routes>
        <Route exact path='/snake' element={<Snake />} />
        <Route path='/*' element={<Board />} />

      </Routes>




    </div>
  )
}

export default Page