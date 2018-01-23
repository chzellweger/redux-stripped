const asyncValue = () => {
  console.log('returning async value...')
  return new Promise(resolve => {
    setTimeout(() => resolve(1), 2000)
  })
}

export default asyncValue
