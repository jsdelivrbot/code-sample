import { take, put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import getIsPaths from 'utilities/get/getIsPaths'
import wrapGetEmails from 'utilities/wrap/wrapGetEmails'

// TODO: refactor to make this scalable (file is getting too long)
export const urlQueryF = function * () {
  while (true) {
    const { payload } = yield take(LOCATION_CHANGE)
    const { pathname } = payload

    const {
      isRootPath,
    } = getIsPaths({ pathname })

    if (isRootPath) {
      const wrappedGetSuggestions = wrapGetEmails()

      yield put(wrappedGetSuggestions)
    }
  }
}

export default urlQueryF
