export default store => next => action => {
  console.log('from logger middleware: \n dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
