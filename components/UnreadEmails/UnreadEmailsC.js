import { connect } from 'react-redux'
import React, { createClass } from 'react'
import { bool, array } from 'prop-types'
import UnreadEmails from './UnreadEmails'
import selectUnreadEmails from 'utilities/select/selectUnreadEmails'

export function mapStateToProps (state, props) {
  const emailIds = selectUnreadEmails(state, props)
  const showNoItems = !emailIds.length

  return {
    showNoItems,
    emailIds,
  }
}

const container = {
  propTypes: {
    showNoItems: bool,
    emailIds: array,
  },

  render () {
    return (
      <UnreadEmails
        {...this.props}
      />
    )
  },
}

export default connect(mapStateToProps)(createClass(container))
