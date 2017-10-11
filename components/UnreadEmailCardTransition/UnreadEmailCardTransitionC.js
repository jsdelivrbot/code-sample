import { connect } from 'react-redux'
import React, { createClass } from 'react'
import { bool, object } from 'prop-types'
import UnreadEmailCardTransition from './UnreadEmailCardTransition'
import getMany from 'utilities/get/getMany'
import omit from 'lodash/omit'

export function mapStateToProps (state, props) {
  const { id, children } = props

  const [
    isPutting,
  ] = getMany(state, [
    `emailsR.items.${id}.isPutting`,
  ])

  return {
    isPutting,
    children,
  }
}

const container = {
  propTypes: {
    isPutting: bool,
    children: object,
  },

  getInitialState () {
    return {
      exit: false,
    }
  },

  componentWillReceiveProps ({ isPutting }) {
    if (isPutting) {
      this.setState({
        exit: true,
      })
    }
  },

  render () {
    const { exit } = this.state
    const omitted = omit(this.props, ['isPutting', 'dispatch'])

    return <UnreadEmailCardTransition {...omitted} exit={exit} />
  },
}

export default connect(mapStateToProps)(createClass(container))
