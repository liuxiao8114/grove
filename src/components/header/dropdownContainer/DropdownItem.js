import React from 'react'
import { Link } from 'react-router'
import style from './Dropdown.scss'

export default class DropdownItem extends React.Component {
  render() {
    const { name, url } = this.props.item
    return (
      <Link to={url} className={style['dropdown-item']}>{name}</Link>
    )
  }
}
