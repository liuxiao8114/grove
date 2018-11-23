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
    return (
      <ul id="header-links" className={style['header-nav']}>
        {
          links.map(
            (link, index) => {
              // link with subList
              if(link.items) {
                const subStyle = (link.name === USER_CONFIG) ?
                  tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw']
                return (
                  <div key={link.id} className={style['dropdown']}>
                    <div className={`${style['header-nav-link']} ${subStyle}`}
                         aria-label={link.tips}
                         onClick={() => onClick(index)}>
                      {link.name}
                    </div>
                    <Dropdown
                      items={link.items}
                      isDisplay={selectedDropdown === index}
                      currentUsername={currentUsername}
                    />
                  </div>
                )
              }
              // link only
              return (
                <Link key={link.id}
                      to={link.url}
                      className={style['dropdown-item']}>
                  {link.name}
                </Link>
              )
            }
          )
        }
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
  links: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedDropdown: PropTypes.string.isRequired,
  currentUsername: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLinks)
