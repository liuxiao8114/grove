import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.scss'
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
      <div className={this.state.modalDisplay ? 'menu-active' : ''}>
        <Header dropdownDisplay={this.state.dropdownDisplay} handleDropdownClick={this.handleDropdownClick}/>
        <Body modalDisplay={this.state.modalDisplay} handleModalClick={this.handleModalClick}/>
      </div>
    )
  }
}
