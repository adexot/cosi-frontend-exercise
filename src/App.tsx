import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import Index from 'routes/Index'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
      <button className='button is-primary'>HELLO</button>
    </div>
  )
}

export default App
