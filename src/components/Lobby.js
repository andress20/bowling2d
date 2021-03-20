import React, { useState } from 'react'

function Lobby() {

  const [p1, setP1] = useState('')
  const [p2, setP2] = useState('')


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

  return (
    <div>
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
          placeholder="Ingresa jugador 1"
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
          placeholder="Ingresa jugador 2"
          required
        />
      </form>
    </div>

  )
}

export default Lobby
