import axios from 'axios'
import { AXIOS_CONFIG } from 'configs'
import { func, checkPropTypes } from 'prop-types'

const propTypes = {
  idUrl: func.isRequired,
}

const putGenericApi = function ({ idUrl }) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'putGenericApi')

  return function (payload) {
    const { id } = payload
    const url = idUrl({ id })

    return axios.put(url, payload, AXIOS_CONFIG)
  }
}

export default putGenericApi
