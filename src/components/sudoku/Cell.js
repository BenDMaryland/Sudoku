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
    activeNumber == bigNumber ? setbackground("lightBlue") : setbackground("white")
  }, [activeNumber])

  const cellerStyle = {
    backgroundColor: background
  }

  return (
    <CellStyle  style={cellerStyle}>

      <input
       style={cellerStyle}
        onClick={(e => NumberHighlighter(e, solution))}
        className="bigNumber"
        type={number}
        maxLength={1}
        value={bigNumber}
        // onFocus={(()=> setnum(bigNumber=>bigNumber=""))}
        onChange={(e) => numHanlder(e)}
      ></input>

      <div className="notes">

        <input
          className="note"
          style={{ color: "green" }}
          value={number}
          onChange={(e) => setnote(e.target.value)}
        ></input>

        <input
          className="theSolution"
          style={{ color: "red" }}
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
        /* height: 60px;
    width: 60px; */
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