import React from 'react'
import { Link } from 'react-router'
import style from './index.scss'

export default class RepositoriesTitle extends React.Component {
  render() {
    return (
      <div className={style['repositories-title']}>
        Repositories
        <Link to={'#'} className={style['new-repository-btn']}>
          New repository
        </Link>
      </div>
    )
  }
}
