import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Cell({ solution, number, boardNums }) {
  const [num, setnum] = useState("");
  const [note, setnote] = useState("");
  const [neg, setneg] = useState("");

  useEffect(() => {
    setnum((num) => (num = boardNums));
    setneg(neg => (neg = solution))
  }, []);

  function numHanlder(e) {

    setnum((num) => (""));
    setnum((num) => (num = e.target.value));
    console.log(e.target.value,solution)
    e.target.value == solution ? e.target.style.color = "blue" : e.target.style.color = "red"
  }

  return (
    <CellStyle >

      <input
      onClick={(e)=>    e.target.select() }
        className="num"
        style={{ color: "black" }}
        type={number}
        maxLength={1}
        value={num}
    // onFocus={(()=> setnum(num=>num=""))}
        onChange={(e) => numHanlder(e)}
      ></input>

      <div className="notes">

        {/* <input
          className="note"
          style={{ color: "green" }}
          value={number}
          onChange={(e) => setnote(e.target.value)}
        ></input>

        <input
          className="neg"
          style={{ color: "red" }}
          value={neg}
          onChange={(e) => setneg(e.target.value)}
        ></input> */}
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
  .num {
    webkit-appearance: none;

    border: none;
    font-size: xx-large;
    height: 60px;
    width: 60px;
    text-align: center;
  }
  .notes {
    display: grid;
    webkit-appearance: none;
    border: none;
    grid-template-columns: repeat(2, 1fr);
  }

  .note,
  .neg {
    webkit-appearance: none;
    border: none;
    height: 10px;
    width: 27px;
    text-align: center;
  }
`;
