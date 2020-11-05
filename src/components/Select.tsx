import React from 'react'
import Select, { SelectProps } from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { isNotEmptyArray } from 'libs/utils'

interface ISelect extends SelectProps {
  options?: string[]
}

const SelectInput: React.FC<ISelect> = ({ options, name, ...props }) => {
  return (
    <Select
      fullWidth
      variant='outlined'
      style={{ marginTop: '15px', textAlign: 'center' }}
      defaultValue=''
      displayEmpty
      name={name}
      id={name}
      {...props}
    >
      <MenuItem value='' disabled>
        Nationality
      </MenuItem>
      {isNotEmptyArray(options) &&
        options?.map((country) => (
          <MenuItem value={country} key={country}>
            {country}
          </MenuItem>
        ))}
    </Select>
  )
}

export default SelectInput
