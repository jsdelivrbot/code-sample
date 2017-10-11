import genericFlow from './genericFlow'
import getEmailsS from 'stateLayer/sagas/getEmailsS'

import {
  GET_EMAILS_F_REQUEST,
  GET_EMAILS_F_SUCCESS,
  GET_EMAILS_F_FAILURE,
  GET_EMAILS_F_CANCEL,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAILURE,
} from 'constants/actionConstants'

const getEmailsF = genericFlow({
  requestF: GET_EMAILS_F_REQUEST,
  successF: GET_EMAILS_F_SUCCESS,
  failureF: GET_EMAILS_F_FAILURE,
  cancelF: GET_EMAILS_F_CANCEL,
  saga: getEmailsS,
  successS: GET_EMAILS_SUCCESS,
  failureS: GET_EMAILS_FAILURE,
})

export default getEmailsF
