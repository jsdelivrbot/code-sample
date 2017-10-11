import './Error404S.scss'
import React from 'react'
import FunLoader from 'components/FunLoader/FunLoader'

const Error404 = () => {
  return (
    <div className='Error404'>
      <h3>Oops, the page you're looking for doesn't exist.</h3>

      <FunLoader />
    </div>
  )
}

Error404.propTypes = {
}

export default Error404
