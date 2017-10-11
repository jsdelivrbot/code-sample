import { connect } from 'react-redux'
import { createClass, createElement } from 'react'
import App from './App'
import getMany from 'utilities/get/getMany'
import { bool } from 'prop-types'

export function mapStateToProps (state) {
  const [
    isGetting,
  ] = getMany(state, [
    'emailsR.isGetting',
  ])

  return {
    showLoader: !!isGetting,
  }
}

const container = {
  propTypes: {
    showLoader: bool,
  },

  render: function () {
    return createElement(App, { ...this.props })
  },
}

export default connect(mapStateToProps)(createClass(container))
