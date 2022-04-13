import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Cell({ number }) {
  const [num, setnum] = useState("");


// useEffect(() => {
// setnum(num=>num=number)
// }, [])


function numHanlder(e){
setnum(num=>num = e.target.value)
}


  return (
    <CellStyle onClick={() => console.log("ddddd", number)}>

      <input value={num} onChange={(e) => numHanlder(e)}></input>
    </CellStyle>
  );
}

export default Cell;

const CellStyle = styled.div`
  border: 1px solid;
  height: 60px;
  width: 60px;
  margin: 0px;
  input {
    webkit-appearance: none;

    border: none;
    font-size: xx-large;
    height: 58px;
    width: 58px;
    text-align: center;
  }
`;
