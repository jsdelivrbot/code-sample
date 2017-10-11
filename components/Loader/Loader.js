import './LoaderS.scss'

import React from 'react'
import classNames from 'classnames'

const Loader = ({ small = false, smallest = false }) => {
  const classes = {
    Loader: true,
    small,
    smallest,
  }

  return (
    <div className={classNames(classes)}>
      <div className='container'>
        <div className='loader' />
      </div>
    </div>
  )
}

Loader.propTypes = {
  small: React.PropTypes.bool,
  smallest: React.PropTypes.bool,
}

export default Loader
