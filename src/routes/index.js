import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/app/App'
import Header from '../components/header'
import Body from '../components/body'
import Entry from '../components/body/entry'
import Profile from '../components/body/profile'
import Stars from '../components/body/stars'

export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Entry}/>
          <Route path="profile" component={Profile}></Route>
          <Route path="pulls"></Route>
          <Route path="issues"></Route>
          <Route path="gist"></Route>
          <Route path="stars" component={Stars}></Route>
          <Route path="/:username"></Route>
        </Route>
      </Router>
    )
  }
})
