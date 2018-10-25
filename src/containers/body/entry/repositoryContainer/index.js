import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RepositoriesTitle from 'react'
import Announcement from 'react'
import RepositoryList from 'react'

import { loadAnnoucements } from 'actions'

export class RepositoryAndAnnouncementZone extends React.Component {
  constructor(props) {
    super(props)
    props.repos = this.props.dispatch()
    props.announcements = null
  }

  componentDidMount() {
    this.props.dispatch(loadAnnoucements)
  }

  render() {
    const { repos, announcements } = this.props
    return (
      <div className="">
        { announcements && <Announcement/> }
        <div>
          <RepositoriesTitle/>
          <RepositoryList repos={ repos }/>
        </div>
      </div>
    )
  }
}

RepositoryAndAnnouncementZone.propTypes = {
  repos: PropTypes.array.isRequired,
  announcements: PropTypes.array,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {

  return {

  }
}

export default connect(mapStateToProps)(RepositoryAndAnnouncementZone)
