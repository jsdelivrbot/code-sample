import { connect } from 'react-redux'
import { createClass, createElement } from 'react'
import App from './App'

export function mapStateToProps (state) {
  return {}
}

const container = {
  render: function () {
    return createElement(App, { ...this.props })
  },
}

export default connect(mapStateToProps)(createClass(container))
