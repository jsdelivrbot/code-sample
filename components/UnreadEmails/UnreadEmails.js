import './UnreadEmailsS.scss'
import React from 'react'
import { array, bool } from 'prop-types'
import UnreadEmailCardC from 'components/UnreadEmailCard/UnreadEmailCardC'
import UnreadEmailCardTransitionC from 'components/UnreadEmailCardTransition/UnreadEmailCardTransitionC'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import NoItems from 'components/NoItems/NoItems'

const UnreadEmails = ({
  emailIds = [],
  showNoItems = false,
}) => {
  return (
    <div className='UnreadEmails'>
      <header>Unread Emails</header>

      { showNoItems &&
        <NoItems />
      }

      <TransitionGroup component='ul'>
        {
          emailIds.map((id, i) => {
            return (
              <UnreadEmailCardTransitionC key={id} id={id}>
                <li>
                  <div className='transitionSpacingHack' />

                  <UnreadEmailCardC id={id} />
                </li>
              </UnreadEmailCardTransitionC>
            )
          })
        }
      </TransitionGroup>
    </div>
  )
}

UnreadEmails.propTypes = {
  emailIds: array,
  showNoItems: bool,
}

export default UnreadEmails
