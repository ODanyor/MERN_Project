import { combineReducers } from 'redux'
import itemReducer from './reducers/itemReducers'
import postReducer from './reducers/postReducers'
import errorReducers from './reducers/errorReducers'

const rootReducer = combineReducers({
    item: itemReducer,
    post: postReducer,
    error: errorReducers
})

export default rootReducer