import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingPage = (): React.ReactNode => {
  return (
    <div className='d-flex justify-content-center align-items-center' id='loading-page'>
      <Spinner variant='info' />
    </div>
  )
}

export default LoadingPage
