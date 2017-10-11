import getMany from 'utilities/get/getMany'
import { assert } from 'chai'
import { describe, it } from 'utilities/mocha'

const { deepEqual: isDeepEqual, equal: isEqual } = assert

describe('Test getMany', () => {
  const state = {
    debitsFilterFormR: {
      currency: 'currency',
      processingMethod: 'processingMethod',
      status: 'status',
    },
    selectedDebitsR: {
      isSelectAll: false,
      selectedDebitIds: [],
    },
    debitsR: {
      isGetting: true,
      items: {
        '1': 1,
        '2': 2,
      },
    },
  }

  describe('When given an object and keyPaths', () => {
    it('It should the correct key-value pairs', () => {
      const [
        currency,
        processingMethod,
        status,
        isSelectAll,
        selectedDebitIds,
        items,
        isGetting,
      ] = getMany(state, [
        'debitsFilterFormR.currency',
        'debitsFilterFormR.processingMethod',
        'debitsFilterFormR.status',
        'selectedDebitsR.isSelectAll',
        'selectedDebitsR.selectedDebitIds',
        'debitsR.items',
        'debitsR.isGetting',
      ])

      isEqual(currency, 'currency')
      isEqual(processingMethod, 'processingMethod')
      isEqual(status, 'status')
      isEqual(isSelectAll, false)
      isDeepEqual(selectedDebitIds, [])
      isDeepEqual(items, { '1': 1, '2': 2 })
      isEqual(isGetting, true)
    })
  })

  describe('When given an object and keyPaths (with array keys)', () => {
    it('It should the correct key-value pairs', () => {
      const [
        currency,
        processingMethod,
        status,
        isSelectAll,
        selectedDebitIds,
        items,
        isGetting,
      ] = getMany(state, [
        '[debitsFilterFormR][currency]',
        'debitsFilterFormR[processingMethod]',
        'debitsFilterFormR.status',
        'selectedDebitsR[isSelectAll]',
        'selectedDebitsR.selectedDebitIds',
        '[debitsR][items]',
        'debitsR[isGetting]',
      ])

      isEqual(currency, 'currency')
      isEqual(processingMethod, 'processingMethod')
      isEqual(status, 'status')
      isEqual(isSelectAll, false)
      isDeepEqual(selectedDebitIds, [])
      isDeepEqual(items, { '1': 1, '2': 2 })
      isEqual(isGetting, true)
    })
  })

  describe('When given an object and some keyPaths that do not exist', () => {
    it('It should the correct key-value pairs', () => {
      const [
        currency,
        processingMethod,
        status,
        wowsa,
        isSelectAll,
        selectedDebitIds,
        items,
        isGetting,
        booga,
      ] = getMany(state, [
        '[debitsFilterFormR][currency]',
        'debitsFilterFormR[processingMethod]',
        'debitsFilterFormR.status',
        'meowsa.wowsa',
        'selectedDebitsR[isSelectAll]',
        'selectedDebitsR.selectedDebitIds',
        '[debitsR][items]',
        'debitsR[isGetting]',
        'ooga.booga',
      ])

      isEqual(currency, 'currency')
      isEqual(processingMethod, 'processingMethod')
      isEqual(status, 'status')
      isEqual(isSelectAll, false)
      isDeepEqual(selectedDebitIds, [])
      isDeepEqual(items, { '1': 1, '2': 2 })
      isEqual(isGetting, true)
      isEqual(wowsa, undefined)
      isEqual(booga, undefined)
    })
  })

  describe('When given an empty object and keyPaths', () => {
    it('It should the correct key-value pairs', () => {
      const [
        currency,
        processingMethod,
        status,
        isSelectAll,
        selectedDebitIds,
        items,
        isGetting,
      ] = getMany({}, [
        'debitsFilterFormR.currency',
        'debitsFilterFormR.processingMethod',
        'debitsFilterFormR.status',
        'selectedDebitsR.isSelectAll',
        'selectedDebitsR.selectedDebitIds',
        'debitsR.items',
        'debitsR.isGetting',
      ])

      isEqual(currency, undefined)
      isEqual(processingMethod, undefined)
      isEqual(status, undefined)
      isEqual(isSelectAll, undefined)
      isEqual(selectedDebitIds, undefined)
      isEqual(items, undefined)
      isEqual(isGetting, undefined)
    })
  })

  describe('When given an object and no keyPaths', () => {
    it('It should the correct key-value pairs', () => {
      const [
        currency,
        processingMethod,
        status,
        isSelectAll,
        selectedDebitIds,
        items,
        isGetting,
      ] = getMany(state)

      isEqual(currency, undefined)
      isEqual(processingMethod, undefined)
      isEqual(status, undefined)
      isEqual(isSelectAll, undefined)
      isEqual(selectedDebitIds, undefined)
      isEqual(items, undefined)
      isEqual(isGetting, undefined)
    })
  })
})
