import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducers'

const rootReducer = combineReducers({
  cake: cakeReducer
})

export default rootReducer