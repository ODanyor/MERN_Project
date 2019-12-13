import { createStore, applyMiddleware } from 'redux'
//Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const middleware = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store