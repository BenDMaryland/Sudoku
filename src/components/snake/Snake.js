
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SnakeCell from "./SnakeCell"



function Snake() {
  const gridSize = 225
  let columnSize = Math.sqrt(gridSize)
  const [player, setplayer] = useState(112)
  const [playerFollower, setplayerFollower] = useState([112, 112, 112, 112])
  const [snakeGrid, setsnakeGrid] = useState([...Array(gridSize).keys()])
  const [lastKey, setLastKey] = useState()

  const boardStyle = {
    'border': "solid",
    'display': "grid",
    'gridTemplateColumns': `repeat(${columnSize}, 1fr)`,
    'width': "fit-content",
    'height': "fit-content",
  }






  //// This handles moving the snakes head 
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

  /// This checks if the player is dead
  useEffect(() => {

    if (0 > player || player > 224) { playerDeath(1) }
    if (player % 15 === 0 && lastKey === 68) { playerDeath(2) }
    if ((player - 14) % 15 === 0 && lastKey === 65) { playerDeath(3) }
    if (playerFollower.includes(player)) { playerDeath(4) }
  }, [player]);


  // moved the rest of the snake
  useEffect(() => {


    setplayerFollower(followers => followers.map((follower, i, arr) => {
      i === 0 ? follower = player : follower = arr[i - 1]
      return follower
    }))

  }, [player])



  function playerDeath(num) {
    console.log("You died", num)
    setplayer(112)
    setplayerFollower([112, 112, 112, 112])
  }


  return (
    <div style={boardStyle}>
      {snakeGrid.map((grid, i) => (<SnakeCell playerFollower={playerFollower} key={i} player={player} cellNumber={i} />))}
    </div>
  )
}

export default Snake
