import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import rootFlows from './flows'
import createSagaMiddleware from 'redux-saga'
import { createHistory } from './history'
import { REDUX_LOGGER_ON } from 'configs'
import { initialize, registerField, destroy } from 'redux-form'

export default function configureStore ({
  initialState = {},
  reduxLoggerOn = true,
}) {
  const history = createHistory()
  const sagaMiddleware = createSagaMiddleware(rootFlows)
  const initializeType = initialize().type
  const registerFieldType = registerField().type
  const destroyType = destroy().type
  const ignoreActionTypes = [initializeType, registerFieldType, destroyType]

  const logger = createLogger({
    predicate: (getState, action) => {
      return !ignoreActionTypes.includes(action.type)
    },
  })

  const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware),
    REDUX_LOGGER_ON && reduxLoggerOn ? applyMiddleware(logger) : (f) => f, // need to add (f) => f for a dummy function. cannot just use noop.
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
