import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState
  )
  return store
}
