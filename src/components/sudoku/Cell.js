import React, { useEffect, useState } from "react";
import styled from "styled-components";


function Cell({ solution, number, boardNums, showSolution, NumberHighlighter, activeNumber }) {
  const [bigNumber, setnum] = useState("");
  const [note, setnote] = useState("");
  const [theSolution, setneg] = useState("");
  const [background, setbackground] = useState("white")


  useEffect(() => {
    setnum((bigNumber) => (bigNumber = boardNums));

  }, []);

  useEffect(() => {

    showSolution ? setneg(theSolution => (theSolution = solution)) : setneg(theSolution => (theSolution = ""))
  }, [showSolution])



  function numHanlder(e) {

    setnum((bigNumber) => (""));
    setnum((bigNumber) => (bigNumber = e.target.value));
    e.target.value == solution ? e.target.style.color = "blue" : e.target.style.color = "red"
  }

  useEffect(() => {
    console.log(background,activeNumber,bigNumber)
    activeNumber.active == bigNumber ? setbackground("lightBlue") : setbackground("white")
  }, [activeNumber])

  const cellerStyle = {
    backgroundColor: background
  }

  return (
    <CellStyle  >

      <input
       style={cellerStyle}
        onClick={(e => NumberHighlighter(e, number))}
        className="bigNumber"
        type={number}
        maxLength={1}
        value={bigNumber}
        onChange={(e) => numHanlder(e)}
      ></input>

      <div className="notes">

        {/* <input
          className="note"
          style={cellerStyle}
          value={number}
          onChange={(e) => setnote(e.target.value)}
        ></input> */}

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
   width: 58px;
   text-align: center;
 }
`