export default function createStore(reducer, preloadedState, enhancer) {
  let currentState = preloadedState,
      currentListeners = [],
      nextListeners = currentListeners

  if(typeof preloadedState === 'function' && !enhancer) {
    enhancer = preloadedState
    preloadedState = null
  }

  if(enhancer) {
    return enhancer(createStore)(reducer, preloadedState)
  }

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    nextListeners.push(listener)
  }

  function dispatch(action) {

  }

  return {
    dispatch,
    getState,
    subscribe
  }
}
