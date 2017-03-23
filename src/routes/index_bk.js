import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from '../components/App';
// import Header from '../components/Header';

import home from './home';
import login from './login';


/* GET home page. */
export default {

  path: '/',

  children: [
    home,
    login
  ],

  async action({ next, render, context}){
    const component = await next();
    if(component !== undefined){
      return render(
      <App context={context}>
        {component}
      </App>)
    }
  },

  render(){
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path="pulls"/>
          <Route path="issues"/>
          <Route path="notifications"/>
          <Route path="notifications"/>
        </Route>
      </Router>
    )
  }
};
