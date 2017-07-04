import React from 'react'
import { Link } from 'react-router'
import style from './HeaderLink.scss'

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
    return (
      <div className={style['header-nav-item']}>
        <Link to={link} className={style['header-nav-link']} onClick={this.handleClick}>{name}</Link>
      </div>
    )
  }
}
