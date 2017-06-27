import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux'

import style from './App.scss'
import Header from '../components/header'
import Body from '../components/body'

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <Body content={children}/>
    </div>
  )
}

export default App
