import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { selectedDropdown } from '../../actions'
import Dropdown from '../../components/header/Dropdown'
import tooltipStyle from './Tooltipped.scss'
import style from './DropdownLinks.scss'

const USER_CONFIG = 'User'

export class DropdownLinks extends Component {
  render() {
    const { links, onClick, selectedDropdown, currentUsername } = this.props
    let keys = Object.keys(links)

    return (
      <ul id="user-links" className={style['user-nav']}>
        {keys.map(k => {
          if(links[k].items) {
            const subStyle = (name === USER_CONFIG) ?
              tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw']
            return (
              <div key={links[k].id} className={style['dropdown']}>
                <div className={`${style['header-nav-link']} ${subStyle}`}
                     aria-label={links[k].tips}
                     onClick={() => onClick(k)}>
                  {links[k].name}
                </div>
                <Dropdown
                  items={links[k].items}
                  isDisplay={selectedDropdown === k}
                  currentUsername={currentUsername}/>
              </div>
            )
          }
          return (
            <Link key={links[k].id}
                  to={links[k].url}
                  className={style['dropdown-item']}>
              {links[k].name}
            </Link>
          )
        })}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClick: id => { dispatch(selectedDropdown(id)) }
})

const mapStateToProps = state => ({
  selectedDropdown: state.selectedDropdown,
  currentUsername: state.currentUser.username
})

DropdownLinks.propTypes = {
  links: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  selectedDropdown: PropTypes.string.isRequired,
  currentUsername: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLinks)
