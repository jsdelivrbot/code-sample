import { take, fork, put, cancel } from 'redux-saga/effects'
import { string, func, checkPropTypes } from 'prop-types'

const propTypes = {
  requestF: string.isRequired,
  successF: string.isRequired,
  failureF: string.isRequired,
  cancelF: string.isRequired,
  saga: func.isRequired,
  successS: string.isRequired,
  failureS: string.isRequired,
  modalCloseA: string,
}

const genericFlow = function ({
  requestF,
  successF,
  failureF,
  cancelF,
  saga,
  successS,
  failureS,
  modalCloseA,
}) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'genericFlow')

  return function * () {
    while (true) {
      const { values, shouldCloseModal } = yield take(requestF)

      const sagaCall = yield fork(saga, { values })

      const {
        newValues,
        type,
        stats,
      } = yield take([successS, failureS, cancelF])

      if (type === cancelF) {
        yield cancel(sagaCall)
      } else if (type === successS) {
        yield put({
          type: successF,
          values,
          newValues,
          stats,
        })

        if (shouldCloseModal) {
          yield put({ type: modalCloseA })
        }
      } else {
        yield put({ type: failureF, values })
      }
    }
  }
}

export default genericFlow
