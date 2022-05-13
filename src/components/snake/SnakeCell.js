import { tSModuleDeclaration } from "@babel/types"
import React, { useEffect, useState } from "react"
import { unstable_shouldYield } from "scheduler"
import styled from "styled-components"
    
function SnakeCell({ cellNumber }) {
    
    const cellStyle = {
        "margin": "0",
        'border': 'solid',
        'height': "5px",
        "width":"5px"


}

  return (
      <div  style={cellStyle}> </div>
  )
}

export default SnakeCell