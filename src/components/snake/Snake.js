import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SnakeCell from "./SnakeCell"



function Snake() {
  const gridSize = 225
  let columnSize = Math.sqrt(gridSize)
  const [player, setplayer] = useState(112)
  const [snakeGrid, setsnakeGrid] = useState([...Array(gridSize).keys()])
  const [lastKey, setLastKey] = useState()

  const boardStyle = {
    'border': "solid",
    'display': "grid",
    'gridTemplateColumns': `repeat(${columnSize}, 1fr)`,
    'width': "fit-content",
    'height': "fit-content",
  }

  useEffect(() => {
    function movePlayer(e) {
      setLastKey(e.keyCode)
      e.keyCode === 87 && setplayer(player => player = player - 15)
      e.keyCode === 83 && setplayer(player => player = player + 15)
      e.keyCode === 68 && setplayer(player => player + 1)
      e.keyCode === 65 && setplayer(player => player - 1)

    }

    document.addEventListener('keydown', movePlayer);
    return function cleanup() {
      document.removeEventListener('keydown', movePlayer);
    }
  }, []);


  useEffect(() => {
    // console.log(player)
    0 > player || player > 224 ? playerDeath() :
      player % 15 === 0 && lastKey === 68 ? playerDeath() :
        player % 14 === 0 && lastKey === 65 ? playerDeath() : console.log("")



    console.log(player % 15, lastKey)


  }, [player]);



  function playerDeath() {
    console.log(player, "You dead ")
setplayer(112)
  }


  return (
    <div style={boardStyle}>
      {snakeGrid.map((grid, i) => (<SnakeCell key={i} player={player} cellNumber={i} />))}
    </div>
  )
}

export default Snake
