import { PUT_EMAIL_F_REQUEST } from 'constants/actionConstants'
import { string, bool, checkPropTypes } from 'prop-types'

const propTypes = {
  id: string.isRequired,
  unread: bool,
}

const wrapPutEmail = function ({ id, unread }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'wrapPutEmail')

  return {
    type: PUT_EMAIL_F_REQUEST,
    values: { id, unread },
  }
}

export default wrapPutEmail
