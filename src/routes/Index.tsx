import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAppData } from 'contexts/AppContext'

interface IFormData {
  flightNumber: string
  lastName: string
}

const Index = () => {
  const { register, handleSubmit } = useForm()
  const { setAppData } = useAppData()
  const history = useHistory()

  const saveData = (data: IFormData) => {
    setAppData(data)
    history.push('/flight')
  }

  return (
    <Box display='column'>
      <Typography>Welcome to web check-in</Typography>
      <form onSubmit={handleSubmit(saveData)}>
        <TextInput
          id='flightNumber'
          name='flightNumber'
          placeholder='Flight #'
          inputRef={register}
        />
        <TextInput
          name='lastName'
          id='lastName'
          placeholder='Last name'
          inputRef={register}
        />
        <Button>Search flight</Button>
      </form>
    </Box>
  )
}

export default Index