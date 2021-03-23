import React, { useRef, useState, useContext } from 'react'
import Score from '../components/Score'
import { PlayerContext } from '../store/PlayerContext'

  var four = [false, false, false, false]
  var three = [false, false, false]
  var two = [false, false]
  var one = [false]
  let boxTop = [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  let boxBottom = [[0,0], [0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  var turn = 0

function Board() {
  const canvasRef = useRef(null)
  const [crash, setCrash] = useState(false)
  const { p1, p2 } = useContext(PlayerContext)
  var scoreStrike 

  if(!p1 && !p2) {
    p1 = localStorage.getItem('p1')
    p2 = localStorage.getItem('p2')
  }

  const startPlay = () => {

    animation()
    four = strike(four)
    three = strike(three)
    two = strike(two)
    one = strike(one)

    scoreStrike = four.concat(three).concat(two).concat(one).filter(e => e)
    saveScore(scoreStrike, 'p1', turn)
    setTimeout(() => {
      setCrash(!crash)
    }, 1000)
  }

  const animation = () => {
    document.getElementById('ball').className = 'ball1'
  }

  const saveScore = (scoreStrike, player, turn) => {
    if(player == 'p1') {
      boxTop[turn][0] = scoreStrike.length
    } else {
      boxBottom[turn][0] = scoreStrike.length
    }
    turn++
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


  return (
    <div id="panel">
      <div className="active-player">
        <div>{ p1.name }</div>
        <div>{ p2.name }</div>
      </div>
      <div id="score-board">
        <div className="scoreP1">
          { boxTop.map((e,i) => {
            return <Score key={i} head={i+1} score={e[0]} extra={e[1]} />
          })}
        </div>
          <div className="board-game">
            <div id="ball">
            </div>
            <div className="pines">
              <div className="order">
                {!!four && four.length > 0 && four.map((e,i) => {
                  if(e) return <div key={i} show="down"></div>
                    return <div key={i} show="up"></div>
                })}
              </div>
              <div className="order">
                {!!three && three.length > 0 && three.map((e,i) => {
                  if(e) return <div key={i} show="down"></div>
                    return <div key={i} show="up"></div>
                })}
              </div>
              <div className="order">
                {!!two && two.length > 0 && two.map((e,i) => {
                  if(e) return <div key={i} show="down"></div>
                    return <div key={i} show="up"></div>
                })}
              </div>
              <div className="order">
                {!!one && one.length > 0 && one.map((e,i) => {
                  if(e) return <div key={i} show="down"></div>
                    return <div key={i} show="up"></div>
                })}
              </div>
            </div>
          </div>
        <div className="scoreP2">
          { boxBottom.map((e,i) => {
            return <Score key={i} head={i+1} score={e[0]} extra={e[1]} />
          })}
      </div>
      </div>
      <div className="container-button-play">
        <button className="button-play"onClick={ startPlay }>Play</button>
      </div>
    </div>
  )
}

export default Board
