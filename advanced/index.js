import { createStore, combineReducers } from 'redux'
import app from './reducers/reducers'
import store from './store'
import * as actions from './actions/actions'
import * as selectors from './selectors'

const INTERVAL = 1
const BIG_INTERVAL = 100

document.querySelector('#increment').addEventListener('click', () => {
  store.dispatch(actions.doIncrement(INTERVAL))
})

document.querySelector('#decrement').addEventListener('click', () => {
  store.dispatch(actions.doDecrement(INTERVAL))
})

document.querySelector('#decrement-big').addEventListener('click', () => {
  store.dispatch(actions.doBigDecrement(BIG_INTERVAL))
})

document.querySelector('#increment-big').addEventListener('click', () => {
  store.dispatch(actions.doBigIncrement(BIG_INTERVAL))
})

store.subscribe(() => {
  document.querySelector('#result').innerHTML = selectors.getSmallState(store)
  document.querySelector('#result-big').innerHTML = selectors.getBigState(store)
})
