import React from 'react'
import { useHistory } from 'react-router-dom'

function Welcome() {

  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    history.push('/Lobby')
  }

  return (
    <div className="welcome">
      <p>BOWLING 2D</p>
      <button onClick={ handleClick }>New Game</button>
    </div>
  )
}

export default Welcome
