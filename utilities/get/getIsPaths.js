import {
  ROOT_PATH,
} from 'constants/pathConstants'

import { string, checkPropTypes } from 'prop-types'

const propTypes = {
  pathname: string,
}

const getIsPaths = function ({ pathname = '' }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'getIsPaths')

  const isRootPath = pathname === ROOT_PATH

  return {
    isRootPath,
  }
}

export default getIsPaths
