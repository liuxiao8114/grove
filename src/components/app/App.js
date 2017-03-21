import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import Header from './header';

const App = React.createClass({
  getInitialState(){

  },
  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }
});

export default App;
