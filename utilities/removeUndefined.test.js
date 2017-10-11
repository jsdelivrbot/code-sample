import removeUndefined from './removeUndefined'
import { assert } from 'chai'
import { describe, it } from 'utilities/mocha'

const { deepEqual: isDeepEqual } = assert

describe('removeUndefined', () => {
  describe('When given an object with an undefined key', () =>
    it('Should return object with the undefined key removed', () => {
      const obj = {
        a: 'a',
        b: undefined,
        c: 'c',
      }

      const expected = {
        a: 'a',
        c: 'c',
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with an null key', () =>
    it('Should return object with the null key removed', () => {
      const obj = {
        a: 'a',
        b: null,
        c: false,
      }

      const expected = {
        a: 'a',
        c: false,
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with an undefined key', () =>
    it('Should not alter the object passed in', () => {
      const obj = {
        a: null,
        b: undefined,
        c: 'c',
        d: false,
      }

      const expected = {
        a: null,
        b: undefined,
        c: 'c',
        d: false,
      }

      removeUndefined(obj)

      isDeepEqual(obj, expected)
    })
  )

  describe('When given an object with a nested undefined key', () =>
    it('Should return object with the undefined key removed', () => {
      const obj = {
        a: 'a',
        c: 'c',
        d: {
          a: undefined,
        },
      }

      const expected = {
        a: 'a',
        c: 'c',
        d: {},
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with a nested null key', () =>
    it('Should return object with the null key removed', () => {
      const obj = {
        a: 'a',
        c: 'c',
        d: {
          a: null,
        },
      }

      const expected = {
        a: 'a',
        c: 'c',
        d: {},
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with an undefined key and a nested undefined key', () =>
    it('Should return object with the undefined keys removed', () => {
      const obj = {
        a: 'a',
        b: undefined,
        c: 'c',
        d: {
          e: undefined,
          f: 'f',
        },
      }

      const expected = {
        a: 'a',
        c: 'c',
        d: {
          f: 'f',
        },
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with a double nested undefined key', () =>
    it('Should return object with the undefined key removed', () => {
      const obj = {
        a: 'a',
        c: 'c',
        d: { e: { f: undefined } },
      }

      const expected = {
        a: 'a',
        c: 'c',
        d: { e: {} },
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with two nested objects each with an undefined key', () =>
    it('Should return object with the undefined keys removed', () => {
      const obj = {
        a: 'a',
        b: { e: undefined },
        c: 'c',
        d: { f: undefined },
      }

      const expected = {
        a: 'a',
        b: {},
        c: 'c',
        d: {},
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )

  describe('When given an object with many undefined and null keys', () =>
    it('Should return object with the undefined keys removed', () => {
      const obj = {
        a: 'a',
        aa: null,
        aaa: [1, 2, 3],
        b: {
          e: 'e',
          f: undefined,
          ff: null,
          g: {
            h: undefined,
            i: 'i',
          },
        },
        c: 'c',
        cc: false,
        d: { j: undefined },
      }

      const expected = {
        a: 'a',
        aaa: [1, 2, 3],
        b: {
          e: 'e',
          g: {
            i: 'i',
          },
        },
        c: 'c',
        cc: false,
        d: {},
      }

      const removed = removeUndefined(obj)

      isDeepEqual(removed, expected)
    })
  )
})
