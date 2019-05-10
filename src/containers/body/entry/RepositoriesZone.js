import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RepositoriesTitle from './RepositoriesTitle'
import AnnouncementList from './AnnouncementList'
import RepositoryList from './RepositoryList'

import { loadAnnoucements, loadUserRepositories } from '../../../actions'
import style from './index.scss'

export class RepositoriesZone extends React.Component {
  constructor(props) {
    super(props)
    this.doFilter = this.doFilter.bind(this)
  }

  componentDidMount() {
    const { loadUserRepositories } = this.props
    loadUserRepositories()
//  loadAnnoucements()
  }

  doFilter(event) {
    this.props.loadUserRepositories(event.target.value)
  }

  render() {
    const { repos = [], announcements } = this.props
    return (
      <div className={style['repositories-zone']}>
        { announcements &&
          announcements.length !== 0 &&
          <AnnouncementList announcements={announcements}/>
        }
        <div className={style['repositories-list-container']}>
          <RepositoriesTitle/>
          <RepositoryList repos={repos} doFilter={this.doFilter}/>
        </div>
      </div>
    )
  }
}

RepositoriesZone.propTypes = {
  repos: PropTypes.array,
  announcements: PropTypes.array,
  loadUserRepositories: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const {
    entities: { repositories },
    pagination: { userOwnRepos }
  } = state
  const items = userOwnRepos.items
  const repos = []
  if(items && items.length !== 0) {
    for(let repoKey of items)
      repos.push(repositories[repoKey])
  }
  return { repos }
}
const mapDispatchToProps = { loadUserRepositories, loadAnnoucements }

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesZone)
