import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import NavLink from './NavLink'; // eslint-disable-line
import Navigation from './Navigation';

const App = React.createClass({
  getInitialState(){

  },
  render(){
    return (
      <div>
        <Navigation></Navigation>
        <p>React content Link</p>
        <Link to="/about">About</Link>
      </div>
    )
  }
});

export default App;
