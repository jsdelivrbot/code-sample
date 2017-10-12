import genericFlow from './genericFlow'
import putEmailS from 'stateLayer/sagas/putEmailS'

import {
  PUT_EMAIL_F_REQUEST,
  PUT_EMAIL_F_SUCCESS,
  PUT_EMAIL_F_FAILURE,
  PUT_EMAIL_F_CANCEL,
  PUT_EMAIL_SUCCESS,
  PUT_EMAIL_FAILURE,
} from 'constants/actionConstants'

const putEmailF = genericFlow({
  requestF: PUT_EMAIL_F_REQUEST,
  successF: PUT_EMAIL_F_SUCCESS,
  failureF: PUT_EMAIL_F_FAILURE,
  cancelF: PUT_EMAIL_F_CANCEL,
  saga: putEmailS,
  successS: PUT_EMAIL_SUCCESS,
  failureS: PUT_EMAIL_FAILURE,
})

export default putEmailF
