import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import App from ''

export default React.createClass({
  render() {
    return (
      <Router>
        <IndexRoute path="/" component={App}>
          <Route path="pulls"></Route>
          <Route path="issues"></Route>
          <Route path="gist"></Route>
        <Route path="stars"></Route>
      <Route path="/:username"></Route>
      <Route path="/:username"></Route>
        </IndexRoute>
      </Router>
    )
  }
})
