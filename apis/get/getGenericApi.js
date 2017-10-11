import axios from 'axios'
import createCleanQueryString from 'utilities/create/createCleanQueryString'
import { AXIOS_CONFIG } from 'configs'
import { string, checkPropTypes } from 'prop-types'

const propTypes = {
  url: string.isRequired,
}

const getGenericApi = function ({ url }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'getGenericApi')

  return function ({ query }) {
    const cleanedQueryString = createCleanQueryString({ query })

    return axios.get(url + '?' + cleanedQueryString, AXIOS_CONFIG)
  }
}

export default getGenericApi
