import React from 'react'
import PropTypes from 'prop-types'

import style from './index.scss'

export default class RepositoryList extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(repos) {
    if(!repos || repos.length === 0) {
      return (
        <div>You don't own any repository yet.</div>
      )
    }
    const items = []
    for(let repo of repos) {
      items.push(<li key={repo.id}>{repo.full_name}</li>)
    }
    return (
      <ul>
        {items}
      </ul>
    )
  }

  render() {
    const { repos, doFilter } = this.props
    return (
      <div>
        <input className={style['repository-list-filter']} onChange={doFilter}/>
        { this.renderItem(repos) }
      </div>
    )
  }
}

RepositoryList.propTypes = {
  repos: PropTypes.array.isRequired,
  doFilter: PropTypes.func.isRequired
}
