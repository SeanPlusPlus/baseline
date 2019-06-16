import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
)

export default store
