import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools';

export default function configureStore(preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )
  )

  return store
}
