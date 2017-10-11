import './UnreadEmailCardS.scss'
import React from 'react'
import { object, bool } from 'prop-types'
// import getMany from 'utilities/get/getMany'
import Loader from 'components/Loader/Loader'

const UnreadEmailCard = ({
  email = {},
  showLoader = false,
}) => {
  // const [
  // ] = getMany(email, [
  // ])

  return (
    <div className='UnreadEmailCard'>
      { showLoader &&
        <Loader small />
      }

      <div>SuggestionCardForm.js</div>
    </div>
  )
}

UnreadEmailCard.propTypes = {
  email: object,
  showLoader: bool,
}

export default UnreadEmailCard
