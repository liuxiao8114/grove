import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import Header from '../header'
import Body from '../body'

const App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
})

export default App;
