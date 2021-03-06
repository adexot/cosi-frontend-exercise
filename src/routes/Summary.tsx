import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import FlightForm, { IFormData } from 'components/FlightForm'
import constants from 'libs/constants'
import reqClient from 'libs/reqClient'

const Summary = () => {
  const history = useHistory()

  const saveData = (data: IFormData) => {
    reqClient(constants.flightMockEndpoint, {
      method: 'post',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        history.push('/confirmation')
      }
    })
  }

  return (
    <Box display='column'>
      <Typography variant='h6'>
        Please review <br /> your information
      </Typography>
      <FlightForm submitHandler={saveData} />
    </Box>
  )
}

export default Summary
