import { BIGINCREMENT, BIGDECREMENT } from '../actions/actionTypes'

export function bigCounter(state = 0, action) {
  const actions = {
    [BIGINCREMENT]: () => state + action.value,
    [BIGDECREMENT]: () => state - action.value
  }
  if (actions[action.type]){
    return actions[action.type]()
  } else {
    return state
  }  
}
