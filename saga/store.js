import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import loggerMiddleware from './middleware/logger'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import rootReducer from './reducers/reducers'

const sagaMiddleware = createSagaMiddleware()

// store
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(loggerMiddleware, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(sagas)

export default store
