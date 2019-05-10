import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import style from './index.scss'

export default function NavLinks(props) {
  return (
    <div className={style['header-nav']} role="navigation">
      {
        props.links.map(item => {
          return (
            <Link
              key={item.id}
              to={item.url}
              className={style['header-nav-link']}>
              {item.name}
            </Link>
          )
        })
      }
    </div>
  )
}

NavLinks.propTypes = {
  links: PropTypes.array.isRequired
}
