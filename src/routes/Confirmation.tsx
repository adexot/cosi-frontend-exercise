import React, { useEffect } from 'react'
import { useAppData } from 'contexts/AppContext'
import Typography from '@material-ui/core/Typography'

const Confirmation = () => {
  const { resetAppData } = useAppData()

  useEffect(() => {
    resetAppData()
  }, [])

  return (
    <Typography variant='h6'>
      Your check-in <br /> is confirmed!
    </Typography>
  )
}

export default Confirmation
