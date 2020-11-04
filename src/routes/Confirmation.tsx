import React, { useEffect } from 'react'
import { useAppData } from 'contexts/AppContext'
import Typography from '@material-ui/core/Typography'

const Confirmation = () => {
  const { resetAppData } = useAppData()

  useEffect(() => {
    // FIXME: uncomment this code
    // resetAppData()
  }, [])

  return <Typography variant='h4'>Your check-in is confirmed</Typography>
}

export default Confirmation
