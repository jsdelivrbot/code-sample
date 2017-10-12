import { fork } from 'redux-saga/effects'
import getEmailsF from './getEmailsF'
import putEmailF from './putEmailF'
import urlQueryF from './urlQueryF'

export default function * root () {
  yield [
    fork(getEmailsF),
    fork(putEmailF),
    fork(urlQueryF),
  ]
}
