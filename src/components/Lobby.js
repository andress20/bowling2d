import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PlayerContext } from '../store/PlayerContext'
 
function Lobby() {

  const [p1, setP1] = useState('')
  const [p2, setP2] = useState('')
  const [startDisabled, setStartDisabled] = useState(null)
  const [startButton, setStartButton] = useState('Please type names first')

  const { createPlayer, storage } = useContext(PlayerContext)
  

  useEffect(() => {
    if(!p1 || !p2) {
      setStartButton('Please type names first')
      setStartDisabled(null)
    }else {
      setStartButton('Start')
      setStartDisabled(true)
    }
  }, [p1, p2])

  const handleChange = (e) => {
    const { name, value } = e.target
    switch(name) {
      case 'pOne':
        setP1(value)
        break;
      case 'pTwo':
        setP2(value)
        break;
      default:
        break;
    }
  }

  const history = useHistory()
  const handleBack = (e) => {
    e.preventDefault()
    history.push('/')
  }

  const handleCreatePlayer = () => {
    createPlayer(p1, p2)
    storage()
    //localStorage.setItem('p1', p1)
    //localStorage.setItem('p2', p2)
    history.push('/board-game')
  }

  //function player(name) {
    //return {
      //player: '',
      //name: name,
      //pins: [],
      //score: 0,
    //}
  //}

  return (
    <div id="lobby-form"> 
      <h1>
        BOWLING 2D
      </h1>
      <form className="players_form">
        <label
          htmlFor="pOne"
        >
          Player 1
        </label>
        <input
          id="pOne"
          name="pOne"
          type="text"
          onChange={ handleChange }
          value={ p1 }
          placeholder="Name P1"
          required
        />
        <label
          htmlFor="pTwo"
        >
          Player 2
        </label>
        <input
          id="pTwo"
          name="pTwo"
          type="text"
          onChange={ handleChange }
          value={ p2 }
          placeholder="Name P2"
          required
        />
        <div className="buttons-lobby">
          <button type="button" disabled={!startDisabled} onClick={ handleCreatePlayer }>{ startButton }</button>
          <button type="button" onClick={ handleBack }>Back</button>
        </div>
      </form>
    </div>

  )
}

export default Lobby
