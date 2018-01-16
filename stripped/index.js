import { createStore } from 'redux'

// reducer
export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
    case 'DECREMENT':
      return state - action.value
    default:
      return state
  }
}

// create the store
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// actions
function doIncrement(value) {
  return { type: 'INCREMENT', value }
}

let doDecrement = value => {
  return { type: 'DECREMENT', value }
}

// html-setup
const INTERVAL = 1

document.querySelector('#increment').addEventListener('click', () => {
  store.dispatch(doIncrement(INTERVAL))
})

document.querySelector('#decrement').addEventListener('click', () => {
  store.dispatch(doDecrement(INTERVAL))
})

store.subscribe(() => {
  document.querySelector('#result').innerHTML = store.getState()
})
