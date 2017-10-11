import { assert } from 'chai'
import { describe, it } from 'utilities/mocha'
import filterItems from './filterItems'

const { deepEqual: isDeepEqual } = assert

describe('filterItems', function () {
  it('should deeply camelcase the keys of a JSON object', function () {
    const reportOption0 = {
      id: '0',
      data: {
        expiration: '2018-01-19',
      },
    }

    const reportOption1 = {
      id: '1',
      data: {
        expiration: '2018-01-19',
      },
    }

    const reportOption2 = {
      id: '2',
      data: {
        expiration: '2017-01-19',
      },
    }

    const reportOptions = {
      [reportOption0.id]: reportOption0,
      [reportOption1.id]: reportOption1,
      [reportOption2.id]: reportOption2,
    }

    const filters = {
      expiration: '2018-01-19',
      something: undefined,
    }

    const filered = filterItems({ items: reportOptions, filters })

    isDeepEqual(filered, [reportOption0, reportOption1])
  })
})
