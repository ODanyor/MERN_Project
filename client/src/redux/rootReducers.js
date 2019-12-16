import { combineReducers } from 'redux'
import itemReducer from './items/itemReducers'

const rootReducer = combineReducers({
    item: itemReducer
})

export default rootReducer