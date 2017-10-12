import React from 'react'
import { string } from 'prop-types'
import moment from 'moment'
import { SERVER_DATE_FORMAT, DISPLAY_DATE } from 'constants/componentConstants'

const INVALID_DATE = 'Invalid date'

const Date = ({
  children = '',
}) => {
  const momentDate = children === '' ? moment() : moment.utc(children, SERVER_DATE_FORMAT)
  const displayDate = momentDate.local().format(DISPLAY_DATE)
  const isInvalidDate = displayDate === INVALID_DATE

  if (isInvalidDate) {
    console.warn(`Invalid date: ${children}`)
  }

  return (
    <span className='Date'>{isInvalidDate ? '' : displayDate}</span>
  )
}

Date.propTypes = {
  children: string,
}

export default Date
