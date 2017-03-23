import React from 'react'
import { Link } from 'react-router'

export default class DropdownItem extends React.Component {
  render() {
    const { itemName, link } = this.props
    return (
      <Link to={link} className="dropdown-item">{itemName}</Link>
    )
  }
}
