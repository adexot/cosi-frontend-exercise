import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'

const ButtonComp: React.FC<{ loading?: boolean }> = ({
  children,
  loading = true,
}) => {
  console.log({ loading })
  return (
    <Button
      color='primary'
      variant='contained'
      style={{ marginTop: '20px', color: 'yellow' }}
      fullWidth
      type='submit'
    >
      {loading ? (
        <CircularProgress size={24} style={{ color: 'yellow' }} />
      ) : (
        children
      )}
    </Button>
  )
}

export default ButtonComp
