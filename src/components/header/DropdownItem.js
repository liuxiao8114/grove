import React from 'react'
import { Link } from 'react-router'

class DropdownItem extends React.Component {
  render() {
    return (
      <Link to="" className="dropdown-item">{this.props.itemName}</Link>
    )
  }
}
