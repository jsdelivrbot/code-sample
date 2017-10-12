import { connect } from 'react-redux'
import React, { createClass } from 'react'
import { object, bool } from 'prop-types'
import ReadEmailCard from './ReadEmailCard'
import getMany from 'utilities/get/getMany'
import wrapPutEmail from 'utilities/wrap/wrapPutEmail'

export function mapStateToProps (state, { id }) {
  const [
    email,
    isPutting,
  ] = getMany(state, [
    `emailsR.items.${id}.data`,
    `emailsR.items.${id}.isPutting`,
  ])

  const showLoader = !!isPutting

  return {
    email,
    isPutting,
    showLoader,
  }
}

const propTypes = {
  isPutting: bool,
  email: object.isRequired,
  showLoader: bool,
}

const container = {
  propTypes,

  onClick () {
    const [
      id,
      dispatch,
    ] = getMany(this, [
      'props.email.id',
      'props.dispatch',
    ])

    const wrappedPutEmail = wrapPutEmail({ id, unread: true })

    dispatch(wrappedPutEmail)
  },

  render () {
    const { props, onClick } = this

    return <ReadEmailCard {...props} onClick={onClick} />
  },
}

export default connect(mapStateToProps)(createClass(container))
