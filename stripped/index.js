import { createStore } from 'redux'

/*
* actions
*/

// we use action creators
// action-creators are simple functions that return an action-object
// and allow for easy parameterization
// we could also use just plain objects like { type: 'DECREMENT', value: 1}

function doIncrement(value) {
  return { type: 'INCREMENT', value }
}

let doDecrement = value => {
  return { type: 'DECREMENT', value }
}

/*
* reducer
*/
// knows how to handle an action object
// takes the current state and an action
// returns a new state
function counter(state = 0, action) {
  // special case: here, "state" is of tpye number, a type which is passed by
  // value.
  // In Redux, you never mutate state. So: if state was an object or an
  // array (passed by reference), we would need to use immutable operations
  // like spread ( [...state, newValue] or {...state, property: newValue})
  // or Object.assign({}, state, {property: newValue})
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
    case 'DECREMENT':
      return state - action.value
    default:
      return state
  }
}

/*
* store
*/
// the store is a simple object with methods
// at creation, pass it the reducer, so it knows how
// to handle the actions passed later by store.dispatch()

// create the store
let store = createStore(
  // pass the reducer:
  counter,
  // just to hook up the redux devtools:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/*
* attach click handler
*/

document.querySelector('#increment').addEventListener('click', () => {
  // dispatch the action to the reducer
  // could also be: store.dispatch({ type: 'INCREMENT', value: 1 })
  store.dispatch(doIncrement(1))
})

document.querySelector('#decrement').addEventListener('click', () => {
  // dispatch the action to the reducer
  store.dispatch(doDecrement(1))
})

// listen for change events from the store object
store.subscribe(() => {
  document.querySelector('#result').innerHTML = store.getState() // .getState() returns the current state
})
