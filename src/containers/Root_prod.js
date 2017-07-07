import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'
//import DevTools from './DevTools'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>
)

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
}

export default Root
