import React from 'react'
import { Link } from 'react-router'

export default class DropdownItem extends React.Component {
  render() {
    const { name, url } = this.props.item
    // <Link to={url} className="dropdown-item">{name}</Link>
    return (
      <Link to={url} className="dropdown-item">{name}</Link>
    )
  }
}
