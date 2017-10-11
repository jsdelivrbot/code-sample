import { connect } from 'react-redux'
import React, { createClass } from 'react'
import { object, bool } from 'prop-types'
import UnreadEmailCard from './UnreadEmailCard'
import getMany from 'utilities/get/getMany'

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

  render () {
    const { props } = this

    return <UnreadEmailCard {...props} />
  },
}

export default connect(mapStateToProps)(createClass(container))
