import React, { useEffect } from "react";
import Cell from "./Cell";
import { useState } from "react";
import styled from "styled-components";

function Board() {
  const [cells, setcells] = useState([]);

  useEffect(() => {
      setcells(cells=>cells=[])

      for (let i = 0; i < 81; i++) {

          setcells(   (cells) =>  (cells = [...cells, <Cell key={i}  i={i } />])   );}
        

    
  }, []);


  return (
    <BoardStyle>

      {cells.map((cell) => cell)}
    </BoardStyle>
  );
}

export default Board;

const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: 60px;
  width: 60px;
`;