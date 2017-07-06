import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../containers/app/App'
import Entry from '../containers/body/entry'
import Profile from '../containers/body/profile'
import Stars from '../containers/body/stars'

export default
<Route path="/" component={App}>
  <IndexRoute component={Entry}/>
  <Route path="profile" component={Profile}></Route>
  <Route path="pulls"></Route>
  <Route path="issues"></Route>
  <Route path="gist"></Route>
  <Route path="stars" component={Stars}></Route>
  <Route path="/:username"></Route>
</Route>
