import React, { useEffect, useRef, useState } from 'react'
import BallMovement from './BallMovement'
import data from '../utils/data'

function Board() {
  //const [play, setPlay] = useState(false)
  const canvasRef = useRef(null)
  //let x = 200

  //useEffect(() => {
  //},[])


  const startPlay = () => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      let { ballObj } = data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      BallMovement(ctx, ballObj)
      //x-=2;
      requestAnimationFrame(render)
    }
    render()
  }

  return (
    <div id="board-container">
      <div className="board-game">
        <div className="four">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <canvas ref={canvasRef}/>
        <button className="playButtton" onClick={ startPlay }>Play</button>
    </div>
  </div>
  )
}

export default Board
