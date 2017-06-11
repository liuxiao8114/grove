import { isPlainObject } from 'lodash'

export default function createStore(reducer, preloadedState, enhancer) {
  let currentState = preloadedState,
      currentListeners = [],
      nextListeners = currentListeners,
      currentReducer = reducer,
      isDispatching = false

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
    if(!isPlainObject(action)) {
      throw new Error('')
    }

    if(action.type === undefined) {
      throw new Error('')
    }

    if(isDispatching) {
      throw new Error('')
    }

    try {
      isDispatching = true
      currentState = currentReducer(action)
    } finally {
      isDispatching = false
    }

    const listeners = currentListeners = nextListeners
    listeners.forEach(listener => {
      listener()
    })

    return action
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}
