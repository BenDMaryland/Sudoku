import React, { useEffect, useState } from "react";
import styled from "styled-components";


function Cell({ solution, number, boardNums, showSolution, NumberHighlighter, activeNumber, winHandler}) {
  const [bigNumber, setnum] = useState("");
  const [note, setnote] = useState("");
  const [theSolution, setneg] = useState("");
  const [background, setbackground] = useState("white")


  let squareY = Math.floor(number / 9)
  let squareX = number - (squareY * 9)
  let row
  let column

  squareY < 3 ?
    squareX < 3 ? row = 0
      : squareX < 6 ? row = 1
        : row = 2
    : squareY < 6 ?
      squareX < 3 ? row = 3
        : squareX < 6 ? row = 4
          : row = 5
      :
      squareX < 3 ? row = 6
        : squareX < 6 ? row = 7
          : row = 8


  squareY % 3 === 0 ?
    squareX % 3 === 0 ? column = 0
      : squareX % 3 === 1 ? column = 1
        : column = 2
    : squareY % 3 === 1 ?
      squareX % 3 === 0 ? column = 3
        : squareX % 3 === 1 ? column = 4
          : column = 5
      :
      squareX % 3 === 0 ? column = 6
        : squareX % 3 === 1 ? column = 7
          : column = 8

  useEffect(() => {
    setnum((bigNumber) => (bigNumber = boardNums));

  }, []);

  useEffect(() => {

    showSolution ? setneg(theSolution => (theSolution = solution)) : setneg(theSolution => (theSolution = ""))
  }, [showSolution])



  function numHanlder(e) {

    setnum((bigNumber) => (""));
    setnum((bigNumber) => (bigNumber = parseInt(e.target.value)));
    e.target.value == solution ? e.target.style.color = "blue" : e.target.style.color = "red"
    winHandler(e,number)

  }

  useEffect(() => {

    if (activeNumber.active == "") { setbackground("white") }
    else if (activeNumber.active == bigNumber) { setbackground("#18aad7") }
    else if (activeNumber.row == row || activeNumber.column == column || activeNumber.square == squareY) { setbackground("lightBlue") }
    else { setbackground("white") }
  }, [activeNumber])

  const cellerStyle = {
    backgroundColor: background
  }

  return (
    <CellStyle  >

      <input
        style={cellerStyle}
        onFocus={(e => NumberHighlighter(e, number))}
        className="bigNumber"
        type={number}
        maxLength={1}
        value={bigNumber}
        onChange={(e) => numHanlder(e)}
      ></input>

      <div className="notes">

        <input
          className="note"
          style={cellerStyle}
          value={number}
          onChange={(e) => setnote(e.target.value)}
        ></input>

        <input
          className="theSolution"
          style={cellerStyle}
          value={theSolution}
          onChange={(e) => setneg(e.target.value)}
        ></input>
      </div>
    </CellStyle>
  );


}

export default Cell;

const CellStyle = styled.div`

 border: 1px solid;
 height: 60px;
 width: 60px;
 margin: 0px;
 .bigNumber {
   webkit-appearance: none;
   border: none;
   font-size: xx-large;
   height: 47px;
   width: 58px;
   text-align: center;
 }
 .notes {
   display: grid;
   webkit-appearance: none;
   border: none;
   grid-template-columns: repeat(2, 1fr);
 }
 .note,
 .theSolution {
   webkit-appearance: none;
   border: none;
   height: 10px;
   width: 27px;
   text-align: center;
 }
`