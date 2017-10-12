import './ReadEmailCardS.scss'
import React from 'react'
import { object, bool, func } from 'prop-types'
import getMany from 'utilities/get/getMany'
import Loader from 'components/Loader/Loader'
import Date from 'components/Date/Date'

const ReadEmailCard = ({
  email = {},
  showLoader = false,
  onClick = () => {},
}) => {
  const [
    id,
    subject,
    from,
    to,
    body,
    date,
    unread,
  ] = getMany(email, [
    'id',
    'subject',
    'from',
    'to',
    'body',
    'date',
    'unread',
  ])

  return (
    <div className='ReadEmailCard'>
      { showLoader &&
        <Loader small />
      }

      <div className='actions'>
        <button type='button' className='action' onClick={onClick}>Mark Read</button>
      </div>

      <main>
        <div className='subjectFrom'>
          <p className='subject'>{subject}</p>

          <p className='from'>{from}</p>
        </div>

        <p className='body'>{body}</p>
      </main>

      <div className='date'>
        <Date>{date}</Date>
      </div>
    </div>
  )
}

ReadEmailCard.propTypes = {
  email: object,
  showLoader: bool,
  onClick: func,
}

export default ReadEmailCard
