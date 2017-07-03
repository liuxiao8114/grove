import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import Header from '../components/header'
import Body from '../components/body'
import style from './App.scss'

class App extends Component {
  handleSubmit(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  render() {
    return (
      <div>
        <Header inputValue={this.props.inputValue} handleSubmit={this.handleSubmit}/>
        <Body content={this.props.children}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: ownProps.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps)(App)
