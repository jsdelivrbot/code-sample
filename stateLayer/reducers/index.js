import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import emailsR from './emailsR'

export default combineReducers({
  emailsR,
  routing: routerReducer,
  form: formReducer.plugin({}),
})
