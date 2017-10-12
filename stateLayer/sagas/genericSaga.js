import { put } from 'redux-saga/effects'
// import handleSagaError from 'utilities/handle/handleSagaError'
import { string, func, checkPropTypes } from 'prop-types'

const propTypes = {
  requestAction: string.isRequired,
  successAction: string.isRequired,
  failureAction: string.isRequired,
  api: func.isRequired,
  resourceKey: string,
}

const genericSaga = function ({
  requestAction,
  successAction,
  failureAction,
  api,
  resourceKey,
}) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'genericSaga')

  return function * ({ values }) {
    try {
      yield put({ type: requestAction, values })

      const { data } = yield api({ ...values })
      const resources = data[resourceKey || 'resource']

      const success = {
        type: successAction,
        newValues: resources,
      }

      yield put(success)

      return success
    } catch (error) {
      // yield handleSagaError({ error, action: failureAction })

      return error
    }
  }
}

export default genericSaga
