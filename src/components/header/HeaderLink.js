import React from 'react'
//import { Link } from 'react-router'

export default class HeaderLink extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(e.value + ' : link clicked!')
    return
  }

  render() {
    const { name, link } = this.props.item
    /*
        <Link to={link} className="header-nav-link" onClick={this.handleClick}>{name}</Link>
    */
    return (
      <div className="header-nav-item">
        <a href="#" className="header-nav-link" onClick={this.handleClick}>{name}</a>
      </div>
    )
  }
}
