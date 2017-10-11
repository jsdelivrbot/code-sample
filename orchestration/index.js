import { ENV, AXIOS_CONFIG } from 'configs'
import { MOCK, E2E } from 'constants/envConstants'
import axios from 'axios'
import queryString from 'query-string'
import getCookies from 'utilities/get/getCookies'
import isEmpty from 'lodash/isEmpty'
import parseUrl from 'utilities/parseUrl'
import ORCHESTRATION_MAP from 'constants/orchestrationMap'

const GET_METHOD = 'get'
// TODO: rename payload to values to keep consistency
const orchestration = {
  throwUndefinedUrlError ({ url, method }) {
    throw new Error(`Orchestration error: ${method} ${url} is not a defined.`)
  },

  post ({ url, payload }) {
    return this.sendRequest({ url, payload, method: 'post' })
  },

  get ({ url, payload }) {
    return this.sendRequest({ url, payload, method: 'get' })
  },

  put ({ url, payload }) {
    return this.sendRequest({ url, payload, method: 'put' })
  },

  delete ({ url, payload }) {
    return this.sendRequest({ url, payload, method: 'delete' })
  },

  patch ({ url, payload }) {
    return this.sendRequest({ url, payload, method: 'patch' })
  },

  sendRequest ({ url, method, payload }) {
    const { pathname, query } = parseUrl({ url })
    const requestFunction = ORCHESTRATION_MAP[method][pathname]
    const byPass = [MOCK, E2E].includes(ENV)
    const queryForGetMethod = queryString.stringify(payload)
    const useQuestionMark = url.indexOf('?') === -1 ? '?' : ''
    const urlForGetMethod = !isEmpty(query) ? url + useQuestionMark + queryForGetMethod : url
    const isGetMethod = method === GET_METHOD
    const cookies = getCookies()

    if (byPass) {
      const useUrl = isGetMethod ? urlForGetMethod : url

      return axios[method](useUrl, payload, AXIOS_CONFIG)
    } else if (!requestFunction) {
      this.throwUndefinedUrlError({ url, method })
    } else {
      return requestFunction({ payload, query, cookies, url })
    }
  },
}

export default orchestration
