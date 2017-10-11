import './FunLoaderS.scss'

import React from 'react'
import classNames from 'classnames'

const FunLoader = ({ small = false, smallest = false }) => {
  const classes = {
    FunLoader: true,
    small,
    smallest,
  }

  return (
    <div className={classNames(classes)}>
      <span className='fa fa-grav' />
    </div>
  )
}

FunLoader.propTypes = {
  small: React.PropTypes.bool,
  smallest: React.PropTypes.bool,
}

export default FunLoader
