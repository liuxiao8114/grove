import React from 'react'
import { Link } from 'react-router'
import style from './DropdownItem.scss'

export default class DropdownItem extends React.Component {
  handleClick(event) {
    function resolveToLocation(to, router) {
      return typeof to === 'function' ? to(router.location) : to
    }

    const { router } = this.context
    event.preventDefault()
    router.push(resolveToLocation(this.props.item.url, router))
    this.props.onClick()
  }

  render() {
    const { name, url } = this.props.item
    return (
      <Link to={url} className={style['dropdown-item']}>{name}</Link>
    )
  }
}
