import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'

import DevTools from '../containers/DevTools';
import fetchAPI from '../middlewares/fetchAPI';

export default function configureStore(preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    compose(
      applyMiddleware(thunk, fetchAPI, createLogger()),
      DevTools.instrument()
    )
  )

  return store
}
