import { combineReducers } from 'redux'
import itemReducer from './items/itemReducers'

const rootReducer = combineReducers({
    itemReducer
})

export default rootReducer