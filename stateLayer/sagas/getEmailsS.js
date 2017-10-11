import getEmailsApi from 'apis/get/getEmailsApi'
import genericSaga from './genericSaga'

import {
  GET_EMAILS_REQUEST,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAILURE,
} from 'constants/actionConstants'

const getEmailsS = genericSaga({
  requestAction: GET_EMAILS_REQUEST,
  successAction: GET_EMAILS_SUCCESS,
  failureAction: GET_EMAILS_FAILURE,
  api: getEmailsApi,
  resourceKey: 'emails',
})

export default getEmailsS
