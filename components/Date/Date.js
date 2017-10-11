import React from 'react'
import { string } from 'prop-types'
import moment from 'moment'
import { SERVER_DATE_FORMAT, DISPLAY_DATE } from 'constants/componentConstants'

const Date = ({
  children = '',
}) => {
  const momentDate = children === '' ? moment() : moment.utc(children, SERVER_DATE_FORMAT)

  return (
    <span className='Date'>{momentDate.local().format(DISPLAY_DATE)}</span>
  )
}

Date.propTypes = {
  children: string,
}

export default Date
