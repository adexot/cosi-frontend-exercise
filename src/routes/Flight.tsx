import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import Select from 'components/Select'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAppData } from 'contexts/AppContext'
import { emailRegExp } from 'libs/utils'

interface IFormData {
  firstName: string
  nationality: string
  phoneNumber: string
  email: string
  passport: string
  terms: string
}

const Flight = () => {
  const { register, handleSubmit } = useForm()
  const { appData, setAppData } = useAppData()
  const history = useHistory()

  const saveData = (data: IFormData) => {
    setAppData(data)
    history.push('/summary')
  }

  return (
    <Box display='column'>
      <Typography>Hi, Mr. {appData?.lastName}</Typography>
      <form onSubmit={handleSubmit(saveData)}>
        <TextInput
          name='firstName'
          placeholder='First name'
          inputRef={register({ required: true })}
        />
        <TextInput
          name='lastName'
          placeholder='Last name'
          defaultValue={appData?.lastName}
        />
        <Select placeholder='Nationality' />
        <TextInput
          name='email'
          type='email'
          placeholder='Email'
          inputRef={register({ required: true, pattern: emailRegExp })}
        />
        <TextInput
          name='phoneNumber'
          type='tel'
          placeholder='Phone Number'
          inputRef={register({ required: true })}
        />
        <TextInput
          name='passport'
          placeholder='Passport #'
          inputRef={register({ required: true })}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='acceptTC'
              color='primary'
              inputRef={register({ required: true })}
            />
          }
          label='Accepts T&C'
          style={{ color: 'green' }}
        />
        <Button>Continue</Button>
      </form>
    </Box>
  )
}

export default Flight
