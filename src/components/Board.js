import React, { useRef } from 'react'
import BallMovement from './BallMovement'
import data from '../utils/data'
import BallStrike from '../utils/BallStrike'

function Board() {
  const canvasRef = useRef(null)

  const startPlay = () => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      let { ballObj } = data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      BallMovement(ctx, ballObj)

      BallStrike(ballObj,render)


      requestAnimationFrame(render)
    }
    render()
  }

  const strike = (arr) => {
    return arr.map(() => {
      var number = parseInt((Math.random() * 10))%2 
      if( number === 0) {
        return true
      }else {
        return false
      }
    })
  }

  const four = strike([true, false, true, false])
  const three = strike([false, true, false])
  const two = strike([true, false])
  const one = strike([true]) 

  return (
    <div id="board-container">
      <div className="board-game">
        <div className="pines">
          <div className="order">
            {!!four && four.length > 0 && four.map((e,i) => {
              if(e) return <div key={i} show="paila"></div>
                return <div key={i} show="submit"></div>
            })}
          </div>
          <div className="order">
            {!!three && three.length > 0 && three.map((e,i) => {
              if(e) return <div key={i} show="paila"></div>
                return <div key={i} show="submit"></div>
            })}
          </div>
          <div className="order">
            {!!two && two.length > 0 && two.map((e,i) => {
              if(e) return <div key={i} show="paila"></div>
                return <div key={i} show="submit"></div>
            })}
          </div>
          <div className="order">
            {!!one && one.length > 0 && one.map((e,i) => {
              if(e) return <div key={i} show="paila"></div>
                return <div key={i} show="submit"></div>
            })}
          </div>
        </div>
        <canvas ref={canvasRef}/>
        <button className="playButtton" onClick={ startPlay }>Play</button>
    </div>
  </div>
  )
}

export default Board
