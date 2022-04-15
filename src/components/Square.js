import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";


function Square({ i, boardNums }) {

  const [cells, setcells] = useState([]);


  useEffect(() => {
    setcells((cells) => (cells = []));

    for (let e = 0; e < 9; e++) {
      setcells((cells) => (cells = [...cells, <Cell key={e} boardNums={boardNums[e]}number={i *9 +e} />]))

    }

  
  }, []);




//console.log("Sque22qqwssww2;;;ewe ",boardNums)
 if (boardNums.filter(num=> num ==="").length ===9) return <p>Not working</p>
  return( 
  <SetStyle>{cells.map((cell) => cell)}</SetStyle>
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
