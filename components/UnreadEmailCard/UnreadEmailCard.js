import './UnreadEmailCardS.scss'
import React from 'react'
import { object, bool } from 'prop-types'
import getMany from 'utilities/get/getMany'
import Loader from 'components/Loader/Loader'
import Date from 'components/Date/Date'

const UnreadEmailCard = ({
  email = {},
  showLoader = false,
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
    <div className='UnreadEmailCard'>
      { showLoader &&
        <Loader small />
      }

      <header>
        <div className='subjectFrom'>
          <p className='subject'>{subject}</p>

          <p className='from'>{from}</p>
        </div>

        <div className='date'>
          <Date>{date}</Date>
        </div>
      </header>

      <main>
        <p className='body'>{body}</p>
      </main>

      <footer>
        <button type='button' className='action'>Mark As Read</button>
      </footer>
    </div>
  )
}

UnreadEmailCard.propTypes = {
  email: object,
  showLoader: bool,
}

export default UnreadEmailCard
