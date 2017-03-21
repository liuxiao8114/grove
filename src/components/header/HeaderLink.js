import React from 'react'
import { Link } from 'react-router'

export default class HeaderLink extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {

  }

  render() {
    const { name, link, dropdown } = this.props
    return (
      <div className="header-nav-item">
        <Link to={link} className="header-nav-link">{name}</Link>
        {dropdown}
      </div>
    )
  }
}
