import { fork } from 'redux-saga/effects'
import getEmailsF from './getEmailsF'

export default function * root () {
  yield [
    fork(getEmailsF),
  ]
}
