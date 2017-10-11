import filter from 'lodash/filter'
import isMatch from 'lodash/isMatch'
import removeUndefined from 'utilities/removeUndefined'
import { object, checkPropTypes } from 'prop-types'

const propTypes = {
  items: object,
  filters: object,
}

const filterItems = function ({ items, filters }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'filterItems')

  const removedUndefinedFilters = removeUndefined(filters)

  return filter(items, ({ data }) => {
    return isMatch(data, removedUndefinedFilters)
  })
}

export default filterItems
