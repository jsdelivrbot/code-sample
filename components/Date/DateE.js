import React from 'react'
import Date from './Date'

const DateE = () => {
  return (
    <div className='DateE'>
      <h1 className='exampleHeader'>default</h1>

      <Date />

      <h1 className='exampleHeader'>2017-03-10T21:21:00.000Z</h1>

      <Date>2017-03-10T21:21:00.000Z</Date>
    </div>
  )
}

export default DateE
