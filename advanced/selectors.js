export function getBigState(store) {
  return store.getState().bigCounter
}

export function getSmallState(store) {
  return store.getState().counter
}
