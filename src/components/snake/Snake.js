
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { isWhileStatement } from "typescript"
import SnakeCell from "./SnakeCell"



function Snake() {
  const gridSize = 441
  const columnSize = Math.sqrt(gridSize)
  const startingpos = Math.floor(gridSize / 2)
  const [player, setplayer] = useState(startingpos)
  const [playerFollower, setplayerFollower] = useState([startingpos, startingpos, startingpos, startingpos])
  const [snakeGrid, setsnakeGrid] = useState([...Array(gridSize).keys()])
  const [lastKey, setLastKey] = useState()
  const [CurrentMover, setCurrentMover] = useState(false)
  const [snakeFood, setsnakeFood] = useState(115)
  let runs = 0


  const boardStyle = {
    'border': "solid",
    'display': "grid",
    'gridTemplateColumns': `repeat(${columnSize}, 1fr)`,
    'width': "fit-content",
    'height': "fit-content",
  }


  // This  checks for user inout
  useEffect(() => {
    document.addEventListener('keydown', movePlayer);
    return function cleanup() {
      document.removeEventListener('keydown', movePlayer);
    }
  }, []);

  /// This checks if the player is dead or eating
  useEffect(() => {

    if (0 > player || player > gridSize - 1) { playerDeath(1) }
    if (player % columnSize === 0 && lastKey === 68) { playerDeath(2) }
    if ((player - columnSize+1) % columnSize === 0 && lastKey === 65) { playerDeath(3) }
    if (playerFollower.includes(player)) { playerDeath(4) }
    if (player === snakeFood) { foodHandler() }
  }, [player]);


  // moved the rest of the snake
  useEffect(() => {
    setplayerFollower(followers => followers.map((follower, i, arr) => {
      i === 0 ? follower = player : follower = arr[i - 1]
      return follower
    }))

  }, [player])

  function foodHandler() {
    setplayerFollower(playerFollowers => [...playerFollowers, playerFollowers.slice(-1)])
    setsnakeFood(food => food = Math.floor(Math.random() * gridSize))
  }


  function playerDeath(num) {
    console.log("You died", num)
    setplayer(startingpos)
    setplayerFollower([startingpos, startingpos, startingpos, startingpos])
  }


  //// This handles moving the snakes head 
  function movePlayer(e) {
    setLastKey(e.keyCode)
    runs++

    e.keyCode === 87 && setplayer(player => player = player - columnSize)
    e.keyCode === 83 && setplayer(player => player = player + columnSize)
    e.keyCode === 68 && setplayer(player => player + 1)
    e.keyCode === 65 && setplayer(player => player - 1)
  }

  return (
    <div style={boardStyle}>
      {snakeGrid.map((grid, i) => (<SnakeCell snakeFood={snakeFood} playerFollower={playerFollower} key={i} player={player} cellNumber={i} />))}
    </div>
  )
}

export default Snake
                                           