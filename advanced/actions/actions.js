import { INCREMENT, DECREMENT, BIGINCREMENT, BIGDECREMENT, INCREMENT_ASYNC } from './actionTypes.js'

// normal action creator
// use with store.dispatch(actionCreator())
export function doIncrement(value) {
  return { type: INCREMENT, value }
}

export let doDecrement = (value) => {
  return { type: DECREMENT, value }
}

export let doBigDecrement = (value) => {
  return { type: BIGDECREMENT, value }
}

export let doBigIncrement = (value) => {
  return { type: BIGINCREMENT, value }
}
