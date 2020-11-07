import React, { useState, useEffect } from 'react'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import Select from 'components/Select'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControl, FormControlLabel } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useAppData } from 'contexts/AppContext'
import { emailRegExp, splitString } from 'libs/utils'
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

const initialAdditionalFields = {
  residence_address: false,
  residence_city: false,
  residence_country: false,
  passport_expiry_date: false,
  birth_date: false,
  birth_place: false,
  passport_date_issue: false,
  passport_location_issue: false,
}

const FlightForm: React.FC<{
  submitHandler: (data: IFormData) => void
  showTC?: boolean
}> = ({ submitHandler, showTC = false }) => {
  const { register, handleSubmit, control } = useForm()
  const { appData } = useAppData()
  const [countryList, setCountryList] = useState([])
  const [additionalFields, setAdditionalFields] = useState<
    Record<string, boolean>
  >(initialAdditionalFields)

  useEffect(() => {
    handleCustomFieldsRender(appData.nationality)
    reClient(constants.countryEndpoint)
      .then((data) => {
        const countries = data.map(
          (country: Record<string, string>) => country?.name
        )
        setCountryList(countries)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleNationalityChange = (
    e: React.ChangeEvent<Record<string, any>>
  ) => {
    const nationalityValue = e.target.value
    handleCustomFieldsRender(nationalityValue)
  }

  const handleCustomFieldsRender = (nationality: string = '') => {
    let stateChange = {}
    // set the appropriate fields depending on the nationality
    switch (nationality.toLowerCase()) {
      case 'austria':
        stateChange = {
          residence_country: true,
          residence_city: true,
          passport_expiry_date: true,
        }
        break
      case 'belgium':
        stateChange = {
          birth_date: true,
          residence_city: true,
          residence_address: true,
        }
        break
      case 'france':
        stateChange = {
          residence_country: true,
          residence_city: true,
          birth_date: true,
          birth_place: true,
        }
        break
      case 'greece':
        stateChange = {
          passport_date_issue: true,
          passport_location_issue: true,
          passport_expiry_date: true,
        }
        break
      case 'spain':
        stateChange = {
          residence_address: true,
        }
        break
    }

    // Add the initialAdditionalFields to restore to initial state to prevent bug with displaying old fields
    setAdditionalFields({ ...initialAdditionalFields, ...stateChange })
  }

  const renderAdditionalFields = () => {
    return Object.keys(additionalFields).map((field: string) => {
      if (additionalFields[field]) {
        return (
          <TextInput
            name={field}
            placeholder={splitString(field, '_')}
            inputRef={register({ required: true })}
            defaultValue={appData[field] || ''}
          />
        )
      }
      return null
    })
  }

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
          onChange={handleNationalityChange}
          rules={{ required: true }}
          defaultValue={appData.nationality}
          render={({ onChange, value }) => (
            <Select
              placeholder='Nationality'
              options={countryList}
              value={value}
              onChange={(value) => {
                onChange(value)
                handleNationalityChange(value)
              }}
            />
          )}
        />
      </FormControl>
      {renderAdditionalFields()}
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
          style={{ color: 'green', marginTop: '15px' }}
        />
      )}
      <Button>Continue</Button>
    </form>
  )
}

export default FlightForm
