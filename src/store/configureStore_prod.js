import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import fetchAPI from '../middlewares/fetchAPI';

export default function configureStore(preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, fetchAPI)
  )
  return store
}
