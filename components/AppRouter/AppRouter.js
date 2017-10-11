import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { getHistory } from 'stateLayer/history'
import AppC from 'components/App/AppC'
import Error404 from 'components/Error404/Error404'
import get from 'lodash/get'

import {
  ROOT_PATH,
  NO_SCROLL_TOP_PATHS,
  TOP,
} from 'constants/pathConstants'

function onRouteUpdate () {
  const pathname = get(this, 'state.location.pathname')
  const hash = get(this, 'state.location.hash')

  if (hash === `#${TOP}` || !NO_SCROLL_TOP_PATHS.includes(pathname)) {
    window.scrollTo(0, 0)
  }
}

const AppRouter = function ({ store }) {
  const syncedHistory = syncHistoryWithStore(getHistory(), store)

  return (
    <Provider store={store}>
      <Router onUpdate={onRouteUpdate} history={syncedHistory}>
        <Route path={ROOT_PATH} component={AppC} />
        <Route path='*' component={Error404} />
      </Router>
    </Provider>
  )
}

AppRouter.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppRouter
