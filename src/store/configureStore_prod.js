import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk)
  )
  return store
}
