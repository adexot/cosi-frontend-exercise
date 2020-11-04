import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

const TextInput: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      variant='outlined'
      fullWidth
      style={{ marginTop: '15px' }}
      inputProps={{ style: { textAlign: 'center' } }}
      {...props}
    />
  )
}

export default TextInput
