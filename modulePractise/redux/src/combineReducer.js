export default function combineReducers(reducers) {
  const reducersKeys = Object.key(reducers)
  const finalReducers = {}
  for(let i = 0; i < reducersKeys.length; i++) {
    const key = reducersKeys[i]
    if(typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducerKeys = Object.key(finalReducers)

  return (preloadedState = {}, action) => {
    const nextState = {}
    let hasChanged = false
    for(let i = 0; i < finalReducers.length; i++) {
      const key =  finalReducerKeys[i]
      const reducer = finalReducers[key]
      nextState[key] = reducer(preloadedState[key], action)
      hasChanged = hasChanged || nextState[key] !== preloadedState[key]
    }
    return hasChanged ? nextState : preloadedState
  }
}
