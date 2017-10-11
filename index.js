import ReactDOM from 'react-dom'
import AppRouter from 'components/AppRouter/AppRouter'
import configureStore from 'stateLayer/configureStore'
import { ENV } from 'configs'
import { LOCALDEV } from 'constants/envConstants'

const initialState = {}

const store = configureStore({ initialState })

if (ENV === LOCALDEV) {
  window.store = store
}

// Disable until performance optimization is needed
// if (ENV !== PROD) {
//   Object.defineProperty(React, 'createClass', {
//     set: (nextCreateClass) => {
//       React.createClass = nextCreateClass
//     },
//     get: () => {
//       // to avoid eslint
//     },
//   })
//
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

ReactDOM.render(AppRouter({ store }), document.getElementById('root'))
