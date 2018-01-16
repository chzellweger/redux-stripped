import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import app from './reducers/reducers'
import logger from './middleware/logger'

// store
let store = createStore(
  app,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
