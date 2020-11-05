import React, { useState, useEffect } from 'react'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import Select from 'components/Select'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControl, FormControlLabel } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useAppData } from 'contexts/AppContext'
import { emailRegExp } from 'libs/utils'
import constants from 'libs/constants'
import reClient from 'libs/reqClient'

export interface IFormData {
  firstName: string
  nationality: string
  phoneNumber: string
  email: string
  passport: string
  acceptTerms?: boolean
}

const FlightForm: React.FC<{
  submitHandler: (data: IFormData) => void
  showTC?: boolean
}> = ({ submitHandler, showTC = false }) => {
  const { register, handleSubmit, control } = useForm()
  const { appData } = useAppData()
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    reClient(constants.countryEndpoint)
      .then((data) => {
        const countries = data.map(
          (country: Record<string, string>) => country?.name
        )
        setCountryList(countries)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextInput
        name='firstName'
        placeholder='First name'
        inputRef={register({ required: true })}
        defaultValue={appData?.firstName}
      />
      <TextInput
        name='lastName'
        placeholder='Last name'
        defaultValue={appData?.lastName}
      />
      <FormControl fullWidth>
        <Controller
          name='nationality'
          control={control}
          as={
            <Select
              placeholder='Nationality'
              options={countryList}
              inputRef={register({ required: true })}
              defaultValue={appData.nationality}
            />
          }
        />
      </FormControl>

      <TextInput
        name='email'
        type='email'
        placeholder='Email'
        inputRef={register({ required: true, pattern: emailRegExp })}
        defaultValue={appData?.email}
      />
      <TextInput
        name='phoneNumber'
        type='tel'
        placeholder='Phone Number'
        inputRef={register({ required: true })}
        defaultValue={appData?.phoneNumber}
      />
      <TextInput
        name='passport'
        placeholder='Passport #'
        inputRef={register({ required: true })}
        defaultValue={appData?.passport}
      />
      {showTC && (
        <FormControlLabel
          control={
            <Checkbox
              name='acceptTerms'
              color='primary'
              inputRef={register({ required: true })}
              defaultChecked={appData?.acceptTerms}
            />
          }
          label='Accepts T&C'
          style={{ color: 'green' }}
        />
      )}
      <Button>Continue</Button>
    </form>
  )
}

export default FlightForm
