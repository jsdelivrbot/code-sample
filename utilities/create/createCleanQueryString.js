import queryString from 'query-string'
import removeUndefined from 'utilities/removeUndefined'
import { object, checkPropTypes } from 'prop-types'

const propTypes = {
  query: object,
}

const createCleanQueryString = function ({ query }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'createCleanQueryString')

  const removedUndefined = removeUndefined(query)

  return queryString.stringify(removedUndefined)
}

export default createCleanQueryString
