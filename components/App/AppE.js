import React from 'react'
import App from './App'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const createMockStore = configureMockStore()
const initialState = {}
const store = createMockStore(initialState)

const AppE = () => {
  return (
    <Provider store={store}>
      <div className='AppE'>
        <h1 className='exampleHeader'>Default</h1>

        <App>
          <div>children</div>
        </App>
      </div>
    </Provider>
  )
}

export default AppE
