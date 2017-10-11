import getIsPaths from './getIsPaths'
import { assert } from 'chai'
import { describe, it } from 'utilities/mocha'

import {
  ROOT_PATH,
} from 'constants/pathConstants'

const { isOk } = assert

describe('getIsPaths', () => {
  describe('Given a pathname of ROOT_PATH', () => {
    it('should return the correct object', () => {
      const { isRootPath } = getIsPaths({ pathname: ROOT_PATH })

      isOk(isRootPath)
    })
  })
})
