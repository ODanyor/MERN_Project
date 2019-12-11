import { combineReducers } from 'redux'
// ITEMS REDUCERS
import cakeReducer from './cake/cakeReducers'
import coffeReducers from './coffe_box/coffe_boxReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    coffe: coffeReducers
})

export default rootReducer