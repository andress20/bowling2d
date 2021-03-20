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

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Welcome }/>
          <Route exact path="/Lobby" component={ Lobby }/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
