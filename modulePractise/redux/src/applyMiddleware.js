import { compose } from 'redux'

export default function applyMiddleware(...middlewares) {
  return (createStore) => (rootReducer, preloadedState, enhancer) => {
    const store = createStore(rootReducer, preloadedState, enhancer)
    let dispatch = store.dispatch
    let chain = []
    const middlewareAPI = {
      getState: store.getState(),
      dispatch: (action) => dispatch(action)
    }

    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
