import { ROUTER_ROOT } from 'configs'
import { useRouterHistory } from 'react-router'
import { createHistory as createHistoryOriginal } from 'history'

let history = null

export const createHistory = function () {
  const basename = ROUTER_ROOT

  history = useRouterHistory(createHistoryOriginal)({ basename })

  return history
}

export const getHistory = function () {
  return history
}
