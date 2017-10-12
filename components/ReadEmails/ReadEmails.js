import './ReadEmailsS.scss'
import React from 'react'
import { array, bool } from 'prop-types'
import ReadEmailCardC from 'components/ReadEmailCard/ReadEmailCardC'
import ReadEmailCardTransitionC from 'components/ReadEmailCardTransition/ReadEmailCardTransitionC'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import NoItems from 'components/NoItems/NoItems'

const ReadEmails = ({
  emailIds = [],
  showNoItems = false,
}) => {
  return (
    <div className='ReadEmails'>
      <header>Read Emails</header>

      { showNoItems &&
        <NoItems />
      }

      { !showNoItems &&
        <TransitionGroup component='ul'>
          {
            emailIds.map((id, i) => {
              return (
                <ReadEmailCardTransitionC key={id} id={id}>
                  <li>
                    <ReadEmailCardC id={id} />
                  </li>
                </ReadEmailCardTransitionC>
              )
            })
          }
        </TransitionGroup>
      }
    </div>
  )
}

ReadEmails.propTypes = {
  emailIds: array,
  showNoItems: bool,
}

export default ReadEmails
