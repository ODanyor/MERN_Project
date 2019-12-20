import { combineReducers } from 'redux'
import itemReducer from './items/itemReducers'
import postReducer from './posts/postReducers'
import errorReducers from './reducers/errorReducers'

const rootReducer = combineReducers({
    item: itemReducer,
    post: postReducer,
    error: errorReducers
})

export default rootReducer