import './UnreadEmailsS.scss'
import React from 'react'
import { array, bool, func } from 'prop-types'
import UnreadEmailCardC from 'components/UnreadEmailCard/UnreadEmailCardC'
import UnreadEmailCardTransitionC from 'components/UnreadEmailCardTransition/UnreadEmailCardTransitionC'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Waypoint from 'react-waypoint'
import { PAGE_SIZE } from 'constants/componentConstants'
import NoItems from 'components/NoItems/NoItems'

const UnreadEmails = ({
  emailIds = [],
  showNoItems = false,
  handleWaypointEnter = () => {},
  handleWaypointLeave = () => {},
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
            const page = Math.floor(i / PAGE_SIZE) + 1
            const isLastItem = i === emailIds.length - 1
            const isPageEnd = i % PAGE_SIZE === PAGE_SIZE - 1

            const onEnter = (props) => {
              handleWaypointEnter({ page, props, isPageEnd })
            }

            const onLeave = (props) => {
              handleWaypointLeave({ page, props, isPageEnd })
            }

            return (
              <UnreadEmailCardTransitionC key={id} id={id}>
                <li>
                  <div className='transitionSpacingHack' />

                  <UnreadEmailCardC id={id} />

                  { (isPageEnd || isLastItem) &&
                    <Waypoint
                      onEnter={onEnter}
                      onLeave={onLeave}
                    />
                  }
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
  handleWaypointEnter: func,
  handleWaypointLeave: func,
}

export default UnreadEmails
