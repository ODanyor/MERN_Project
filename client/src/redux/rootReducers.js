import { combineReducers } from 'redux'
import itemReducer from './items/itemReducers'
import errorReducers from './reducers/errorReducers'

const rootReducer = combineReducers({
    item: itemReducer,
    error: errorReducers
})

export default rootReducer