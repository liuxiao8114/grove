import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RepositoriesTitle from 'react'
import AnnouncementList from 'react'
import RepositoryList from 'react'

import { loadAnnoucements, loadUserRepositories } from '../../../actions'

export class RepositoryZone extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, loadUserRepositories, currentUser } = this.props
    dispatch(loadUserRepositories)(currentUser.username)
    // dispatch(loadAnnoucements)
  }

  render() {
    const { repos, announcements } = this.props
    return (
      <div className="">
        { announcements && announcements.length !== 0 && <AnnouncementList/> }
        <div className="">
          <RepositoriesTitle/>
          <RepositoryList repos={ repos }/>
        </div>
      </div>
    )
  }
}

RepositoryZone.propTypes = {
  repos: PropTypes.array.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired
  }),
  announcements: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  loadUserRepositories: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const { pagination, currentUser } = state
  return {
    currentUser,
    repos: pagination.userOwnRepos.repos
  }
}

export default connect(mapStateToProps, { loadUserRepositories })(RepositoryZone)
