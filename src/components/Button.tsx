import React from 'react'
import Button from '@material-ui/core/Button'

const ButtonComp: React.FC<{}> = ({ children }) => {
  return (
    <Button
      color='primary'
      variant='contained'
      style={{ marginTop: '20px' }}
      fullWidth
      type='submit'
    >
      {children}
    </Button>
  )
}

export default ButtonComp
