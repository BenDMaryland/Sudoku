import React from 'react'
import styled from "styled-components";

function Cell({i}) {
  return (
<CellStyle onClick={()=>console.log("ddddd",i)}>{i} </CellStyle>
  )
}

export default Cell



const CellStyle = styled.div`
  border: solid;
  height: 60px;
  width:60px;
`;