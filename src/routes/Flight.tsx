import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { useAppData } from 'contexts/AppContext'
import FlightForm, { IFormData } from 'components/FlightForm'

const Flight = () => {
  const { appData, setAppData } = useAppData()
  const history = useHistory()

  const saveData = (data: IFormData) => {
    console.log({ data })
    setAppData(data)
    history.push('/summary')
  }

  return (
    <Box display='column'>
      <Typography>Hi, Mr. {appData?.lastName}</Typography>
      <FlightForm submitHandler={saveData} showTC={true} />
    </Box>
  )
}

export default Flight
