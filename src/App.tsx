import React from 'react';
import Board from './components/Board';
import Page from './components/Page';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <Routes>

     <Route path='/*' element={  <Page />}/>
    </Routes>
  );
}

export default App;
