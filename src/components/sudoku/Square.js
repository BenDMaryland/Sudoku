import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";


function Square({ i, boardNums, solution, showSolution, NumberHighlighter, activeNumber, winHandler }) {
  const [cells, setcells] = useState([]);

  useEffect(() => {
    setcells((cells) => (cells = []));
    for (let e = 0; e < 9; e++) {
      setcells((cells) => (cells = [...cells,
      {
        key: { e },
        solution: solution[e],
        boardNums: boardNums[e],
        number: i * 9 + e

      }

      ]))
    }
  }, []);



  return (
    <SetStyle>{cells.map((cell) =>
      <Cell
        key={cell.number}
        NumberHighlighter={NumberHighlighter}
        solution={cell.solution}
        activeNumber={activeNumber}
        boardNums={cell.boardNums}
        number={cell.number}
        winHandler={winHandler}
        showSolution={showSolution}
      />)}</SetStyle>
  )
}

export default Square;

const SetStyle = styled.div`
  border: 2px solid;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: fit-content;
`;
