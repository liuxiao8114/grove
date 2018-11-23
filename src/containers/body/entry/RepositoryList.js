import React from 'react'
import PropTypes from 'prop-types'

import { filterUserRepositories } from '../../../actions'
import style from './index.scss'

export class RepositoryList extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  renderItem() {
    const { repos } = this.props
    if(!repos || repos.length === 0) {
      return (
        <div>You don't own any repository yet.</div>
      )
    }
    const items = []
    for(let repo of repos) {
      items.push(<li key={repo.full_name}>{repo.type + ' ' + repo.full_name}</li>)
    }
    return items
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        <input className={ style['abc'] } onChange={ this.handleChange }/>
        { this.renderItem() }
      </div>
    )
  }
}

RepositoryList.propTypes = {
  repos: PropTypes.array.isRequired
}
