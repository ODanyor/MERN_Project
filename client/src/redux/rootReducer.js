import { combineReducers } from 'redux'
// ITEMS REDUCERS
import cakeReducer from './cake/cakeReducers'

const rootReducer = combineReducers({
    cake: cakeReducer
})

export default rootReducer