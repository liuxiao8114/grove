import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/app/App'
import Header from '../components/header'
import Body from '../components/body'
import Profile from '../components/body/profile'

export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route component={Body}>
            <Route path="pulls"></Route>
            <Route path="issues"></Route>
            <Route path="gist"></Route>
            <Route path="stars"></Route>
            <Route path="profile" component={Profile}></Route>
            <Route path="/:username"></Route>
          </Route>
        </Route>
      </Router>
    )
  }
})
