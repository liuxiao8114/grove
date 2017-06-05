import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux'

import style from './App.scss'
import Header from '../components/header'
import Body from '../components/body'

const App = ({ isDropdownDisplay, isModalDisplay }) => {
  return (
    <div>
      <Header />
      <Body content={this.props.children}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isDropdownDisplay: state.isDropdownDisplay,
    isModalDisplay: state.isModalDisplay
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
