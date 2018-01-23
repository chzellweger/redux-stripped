import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { call, put, takeEvery, all } from 'redux-saga/effects'

import getAsyncValue from './getAsyncValue'

// reducer
const reducer = (state = 0, action) => {
  console.log('reducing...', action)
  switch (action.type) {
    case 'INCREMENT_VALUE': {
      return state + action.value
    }
    case 'DECREMENT_VALUE': {
      return state - action.value
    }
    default:
      return state
  }
}
// end reducer

// store
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
// end store

// start saga-listeners
sagaMiddleware.run(combinedSagas)

// sagas

// worker saga, gets the value async and
// dispatches the value to the store
function* getValueSaga(action) {
  console.log('getting value, action is ', action)

  // stopping the generator, getting the value,
  // middleware will call .next(value) with result as value,
  // assigning the result to value and restarting the generator
  const value = yield call(getAsyncValue)

  console.log('got value', value)

  const type =
    action.type === 'INCREMENT' ? 'INCREMENT_VALUE' : 'DECREMENT_VALUE'

  console.log('putting setValueAction to store')
  const actionWithValue = { type, value }
  yield put(actionWithValue)
}

// watcher saga for INCREMENT action types
function* watchIncrementSaga() {
  console.log('now watching for "INCREMEMT" action types')
  yield takeEvery('INCREMENT', getValueSaga)
}

// watcher saga for DECREMENT action types
function* watchDecrementSaga() {
  console.log('now watching for "DECREMEMT" action types')
  yield takeEvery('DECREMENT', getValueSaga)
}

// combine all sagas that need to start at start up
// (initial loads, event listeners etc pp)
function* combinedSagas() {
  yield all([watchIncrementSaga(), watchDecrementSaga()])
}
// end sagas

// setup action creators
function incrementAction() {
  console.log('returning action "INCREMENT" from incrementAction')
  return { type: 'INCREMENT' }
}

function decrementAction() {
  console.log('returning action "DECREMENT" from decrementAction')
  return { type: 'DECREMENT' }
}
// end setup action creators

// setup html
document.querySelector('#increment').addEventListener('click', () => {
  console.log('clicked increment')
  store.dispatch(incrementAction())
})

document.querySelector('#decrement').addEventListener('click', () => {
  console.log('clicked decrement')
  store.dispatch(decrementAction())
})
// end setup html

// listen for changes from store
store.subscribe(() => {
  document.querySelector('#result').innerHTML = store.getState()
})
