import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from 'routes/Index'
import Flight from 'routes/Flight'
import Summary from 'routes/Summary'
import Confirmation from 'routes/Confirmation'
import Box from '@material-ui/core/Box'
import { AppDataProvider } from 'contexts/AppContext'
import ProtectedRoute from 'components/ProtectedRoute'

function App() {
  return (
    <Box className='app-container'>
      <AppDataProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Index />
            </Route>
            <ProtectedRoute exact path='/flight'>
              <Flight />
            </ProtectedRoute>
            <ProtectedRoute exact path='/summary'>
              <Summary />
            </ProtectedRoute>
            <Route exact path='/confirmation'>
              <Confirmation />
            </Route>
          </Switch>
        </Router>
      </AppDataProvider>
    </Box>
  )
}

export default App
