import React, { useEffect, useState } from "react";
import Set from "./Set";

import styled from "styled-components";

function Board() {
  const [sets, setSets] = useState([]);
  const [boardNums, setBoardNums] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

let x = [
  ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];


function validHandler(){
  for (let i = 0; i != 9; i++) {

///checking sets 
hasDuplicates(boardNums[i])



    for (let e = 0; e != 9; e++) {
   
/// to check Rows we want to check every three 
/// that is 0-2 , 3-5 .6-8 of e  but this repeats three times 
/// so if i is 0 -2 then thats one 

///to check columns it's every thrird
 //column 0,3,6 ------- ,1,4,7 , 2,5,8
// For i it's the same 0,3,6 


      }

}
}


  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }




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
  ["", "", "8", "5", "", "9", "", "", ""],

  ["", "", "", "", "1", "", "", "", "6"],

  ["", "", "", "", "", "7", "", "1", ""],

  ["2", "", "5", "", "8", "", "", "6", ""],

  ["", "", "4", "", "5", "", "", "", ""],

  ["9", "", "", "", "", "", "", "", "2"],

  ["", "", "", "", "2", "", "7", "", "1"],

  ["3", "", "", "", "", "", "", "6", ""],

  ["4", "", "", "", "", "", "", "", "9"],
];
