import './UnreadEmailsS.scss'
import React from 'react'
import { array, bool, func } from 'prop-types'
import UnreadEmailsCardFormC from 'components/UnreadEmailsCardForm/UnreadEmailsCardFormC'
import UnreadEmailsCardTransitionC from 'components/UnreadEmailsCardTransition/UnreadEmailsCardTransitionC'
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
              <UnreadEmailsCardTransitionC key={id} id={id}>
                <li>
                  <div className='transitionSpacingHack' />

                  <UnreadEmailsCardFormC id={id} />

                  { (isPageEnd || isLastItem) &&
                    <Waypoint
                      onEnter={onEnter}
                      onLeave={onLeave}
                    />
                  }
                </li>
              </UnreadEmailsCardTransitionC>
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
