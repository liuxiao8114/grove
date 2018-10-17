import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import style from './NavLinks.scss'

export default class NavLinks extends React.Component {
  renderItem(item) {
    return (
      <li key={item.id} className={style['header-nav-item']}>
        <Link to={item.url} className={style['header-nav-link']}>{item.name}</Link>
      </li>
    )
  }

  render() {
    return (
      <ul className={style['header-nav']} role="navigation">
        {this.props.links.map(this.renderItem)}
      </ul>
    )
  }
}

NavLinks.propTypes = {
  links: PropTypes.array.isRequired
}
