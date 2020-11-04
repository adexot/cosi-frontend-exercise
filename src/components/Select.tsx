import React from 'react'
import Select, { SelectProps } from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const SelectInput: React.FC<SelectProps> = (props) => {
  return (
    <Select
      fullWidth
      variant='outlined'
      style={{ marginTop: '15px', textAlign: 'center' }}
      defaultValue={0}
      {...props}
    >
      <MenuItem value={0}>Nationality</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}

export default SelectInput
