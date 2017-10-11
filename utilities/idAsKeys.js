import keyBy from 'lodash/keyBy'
import { array, checkPropTypes } from 'prop-types'

const propTypes = {
  items: array,
}

const idAsKeys = function ({ items }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'idAsKeys')

  return keyBy(items, (item) => {
    return item.data.id
  })
}

export default idAsKeys
