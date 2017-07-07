import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools';

export default function configureStore(preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    DevTools.instrument()
  )
  
  return store
}
