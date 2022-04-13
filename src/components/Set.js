import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";


function Set({ i,data }) {
const [uniqKey, setuniqKey] = useState(0);



  const [cells, setcells] = useState([]);

  useEffect(() => {
    setcells((cells) => (cells = []));

    for (let e = 0; e < 9; e++) {
        setcells((cells) => (cells = [...cells, <Cell key={e} number={data[e]} />]))

    }



    
  }, []);





  return( 
  <SetStyle>{cells.map((cell) => cell)}</SetStyle>
  )
}

export default Set;

const SetStyle = styled.div`
  border: 2px solid;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: fit-content;
`;
