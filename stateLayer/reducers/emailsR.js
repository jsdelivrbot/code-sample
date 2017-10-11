import genericReducer from './genericReducer'

import {
  GET_EMAILS_F_REQUEST,
  GET_EMAILS_F_SUCCESS,
  PUT_EMAIL_F_REQUEST,
  PUT_EMAIL_F_SUCCESS,
} from 'constants/actionConstants'

const emailsR = genericReducer({
  getRequestAction: GET_EMAILS_F_REQUEST,
  getSuccessAction: GET_EMAILS_F_SUCCESS,
  putRequestAction: PUT_EMAIL_F_REQUEST,
  putSuccessAction: PUT_EMAIL_F_SUCCESS,
})

export const MOCK_EMAIL = {
  id: 1,
  subject: 'Next steps',
  from: 'x@gmail.com',
  to: [
    'a@gmail.com',
    'b@gmail.com',
    'c.gmail.com',
  ],
  body: 'Ornare integer tincidunt quis ut nam, lobortis dignissim, montes eros',
  date: '2017-08-01T12:15Z',
  unread: false,
}

export default emailsR
