import React, { useEffect, useRef, useState } from 'react'
import BallMovement from './BallMovement'
import data from '../utils/data'
import BallStrike from '../utils/BallStrike'
import Score from '../components/Score'
import _ from 'lodash'

  var four = [true, true, true, true]
  var three = [true, true, true]
  var two = [true, true]
  var one = [true]

function Board() {
  const canvasRef = useRef(null)
  const [crash, setCrash] = useState(false)

  useEffect(()=>{
    four = strike(four)
    three = strike(three)
    two = strike(two)
    one = strike(one)
  },[crash])

  const startPlay = () => {
    setTimeout(()=>{
      setCrash(true)
      cancelAnimationFrame(render)
    }, 1000)
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      let { ballObj } = data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      BallMovement(ctx, ballObj)

      //BallStrike(ballObj,render)


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

  let boxTop = [[8,7], [5,3], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  let boxBottom = [[8,7], [5,3], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]

  return (
    <div id="panel">
      <div>hola</div>
      <div id="score-board">
        <div className="scoreP1">
          { boxTop.map((e,i) => {
            return <Score head={i+1} score={e[0]} extra={e[1]} />
          })}
        </div>
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
        </div>
        <div className="scoreP2">
          { boxBottom.map((e,i) => {
            return <Score head={i+1} score={e[0]} extra={e[1]} />
          })}
        </div>
      </div>
      </div>
      <div className="container-button-play">
        <button className="button-play"onClick={ startPlay }>Play</button>
      </div>
    </div>
  )
}

export default Board
