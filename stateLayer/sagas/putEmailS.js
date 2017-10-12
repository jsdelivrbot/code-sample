import putEmailApi from 'apis/put/putEmailApi'
import genericSaga from './genericSaga'

import {
  PUT_EMAIL_REQUEST,
  PUT_EMAIL_SUCCESS,
  PUT_EMAIL_FAILURE,
} from 'constants/actionConstants'

const putSuggestionS = genericSaga({
  requestAction: PUT_EMAIL_REQUEST,
  successAction: PUT_EMAIL_SUCCESS,
  failureAction: PUT_EMAIL_FAILURE,
  api: putEmailApi,
})

export default putSuggestionS
