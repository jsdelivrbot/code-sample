import get from 'lodash/get'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import { object, array, oneOfType, checkPropTypes } from 'prop-types'

const propTypes = {
  obj: oneOfType([object, array]),
  keyPaths: array,
}

const getMany = function (obj = {}, keyPaths = []) {
  checkPropTypes(propTypes, { obj, keyPaths }, 'prop', 'getMany')

  if (!isObject(obj) || !isArray(keyPaths)) {
    return []
  }

  const gotten = keyPaths.map((keyPath) => {
    const gottenValue = get(obj, keyPath)

    return gottenValue
  })

  return gotten
}

export default getMany
