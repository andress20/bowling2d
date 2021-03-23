import {createContext, useState} from "react";

export const PlayerContext = createContext()

export function PlayerProvider({ children }) {
  const [p1, setP1] = useState({})
  const [p2, setP2] = useState({})
  var players = 1

  function createPlayer(name1, name2) {
    setP1({ 
      player: players,
      name: name1,
      pins: [],
      score: 0,
    })
    setP2({ 
      player: players + 1,
      name: name2,
      pins: [],
      score: 0,
    })
  }

  function storage() {
    localStorage.setItem('p1', p1.name)
    localStorage.setItem('p2', p2.name)
  }

  return (
    <PlayerContext.Provider
      value={{
        p1,
        p2,
        createPlayer,
        storage,
      }}
    >
      { children }
      </PlayerContext.Provider>
  )
}


