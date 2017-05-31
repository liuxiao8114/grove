export default function createStore(reducer, preloadedState, enhancer) {
  let currentState = preloadedState,
      currentListeners = [],
      nextListeners = currentListeners

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
