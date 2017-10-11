import createCleanQueryString from './createCleanQueryString'
import { assert } from 'chai'
import { describe, it } from 'utilities/mocha'

const { equal: isEqual } = assert

describe('Test createCleanQueryString', () => {
  describe('Given a query with undefined, null, string, false, and number in it', () => {
    it('should return the correct string', () => {
      const query = {
        a: undefined,
        b: false,
        c: 'abc',
        d: 123,
      }

      const cleanQuery = createCleanQueryString({ query })

      isEqual(cleanQuery, 'b=false&c=abc&d=123')
    })
  })
})
