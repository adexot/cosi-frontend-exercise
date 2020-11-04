import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import FlightForm, { IFormData } from 'components/FlightForm'

const Summary = () => {
  const history = useHistory()

  const saveData = (data: IFormData) => {
    // make the call here
    history.push('/confirmation')
  }

  return (
    <Box display='column'>
      <Typography>Please review your information</Typography>
      <FlightForm submitHandler={saveData} />
    </Box>
  )
}

export default Summary
