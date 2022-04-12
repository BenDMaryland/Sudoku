import React from 'react'
import styled from "styled-components";

function Cell({ number }) {
  return (
    <CellStyle onClick={() => console.log("ddddd", number)}>
      {number}{" "}
    </CellStyle>
  );
}

export default Cell



const CellStyle = styled.div`
  border: solid;
  height: 60px;
  width:60px;
`;