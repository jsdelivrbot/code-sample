import { GET_EMAILS_F_REQUEST } from 'constants/actionConstants'
import { checkPropTypes } from 'prop-types'

const propTypes = {
}

const wrapGetEmails = function () {
  checkPropTypes(propTypes, arguments[0], 'prop', 'wrapGetEmails')

  return {
    type: GET_EMAILS_F_REQUEST,
    values: {},
  }
}

export default wrapGetEmails
