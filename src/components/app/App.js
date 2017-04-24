import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import style from './App.scss'
import Header from '../header'
import Body from '../body'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalDisplay: false, dropdownDisplay: false}
    this.handleDropdownClick = this.handleDropdownClick.bind(this)
    this.handleModalClick = this.handleModalClick.bind(this)
  }

  handleDropdownClick() {
    console.log('refresh state!')
    this.setState({
      modalDisplay: true
    })
  }

  handleModalClick() {
    this.setState({
      modalDisplay: false,
      dropdownDisplay: false
    })
  }

  render() {
    return (
      <div>
        <Header dropdownDisplay={this.state.dropdownDisplay} handleDropdownClick={this.handleDropdownClick}/>
        <Body modalDisplay={this.state.modalDisplay} handleModalClick={this.handleModalClick} content={this.props.children}/>
      </div>
    )
  }
}

/*
<div className={this.state.modalDisplay ? 'menu-active' : ''}>

</div>
*/
