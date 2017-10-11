import { fork } from 'redux-saga/effects'
import getEmailsF from './getEmailsF'
import urlQueryF from './urlQueryF'

export default function * root () {
  yield [
    fork(getEmailsF),
    fork(urlQueryF),
  ]
}
