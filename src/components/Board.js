import React, { useEffect, useState } from "react";
import Set from "./Set";

import styled from "styled-components";

function Board() {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    setSets((sets) => (sets = []));

    for (let i = 0; i < 9; i++) {
      setSets(
        (sets) => (sets = [...sets, <Set data={data[i]} key={i} i={i} />])
      );
    }
  }, []);

  return <BoardStyle>{sets.map((set) => set)}</BoardStyle>;
}

export default Board;

const BoardStyle = styled.div`
  display: grid;
  border: 3px solid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: fit-content;
`;
const data = [
  ["", "", "8",
   "5", "", "9", 
   "", "", ""],

  ["", "", "",
   "", "1", "", 
   "", "", "6"],

  ["", "", "", 
  "", "", "7",
   "", "1", ""],


  ["2", "", "5", 
  "", "8", "", 
  "", "6", ""],

  ["", "", "4",
   "", "5", "",
    "", "", ""],

  ["9", "", "", 
  "", "", "", 
  "", "", "2"],

  ["", "", "",
   "", "2", "" , 
   "7", "", "1"],

  ["3", "", "",
   "", "", "", 
   "", "","6"],

  ["4", "", "", 
  "", "", "",
   "", "", "9"],

];
