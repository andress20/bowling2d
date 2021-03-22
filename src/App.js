import React from 'react'
import './styles/styles.scss'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Welcome from './components/Welcome'
import Lobby from './components/Lobby'
import Board from './components/Board'
import Score from './components/Score'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Welcome }/>
          <Route exact path="/lobby" component={ Lobby }/>
          <Route exact path="/board-game" component={ Board }/>
          <Route exact path="/score" component={ Score }/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
