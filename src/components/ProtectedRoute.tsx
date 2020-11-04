import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useAppData } from 'contexts/AppContext'

const ProtectedRoute: React.FC<{
  path: string
  exact?: boolean
}> = ({ children, ...props }) => {
  const { appData } = useAppData()
  const history = useHistory()

  // check if flightNumber exist
  const isAthourized = !!appData?.flightNumber

  if (!isAthourized) history.push('/')

  return <Route {...props}>{children}</Route>
}

export default ProtectedRoute
