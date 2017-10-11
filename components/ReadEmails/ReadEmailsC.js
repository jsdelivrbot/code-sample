import { connect } from 'react-redux'
import React, { createClass } from 'react'
import { bool, array } from 'prop-types'
import ReadEmails from './ReadEmails'
import selectReadEmails from 'utilities/select/selectReadEmails'

export function mapStateToProps (state, props) {
  const emailIds = selectReadEmails(state, props)
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
      <ReadEmails
        {...this.props}
      />
    )
  },
}

export default connect(mapStateToProps)(createClass(container))
