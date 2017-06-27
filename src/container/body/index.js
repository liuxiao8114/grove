import React from 'react'
import style from './index.scss'
import Entry from './entry'

import { connect } from 'react-redux'

export class Body extends React.Component {

  render() {
    const { isBodyModalDisplay, content, handleClick } = this.props

    return (
      <div>
        <div className={isBodyModalDisplay ? style['modal-active'] : style['modal-backdrop']}
          onClick={handleClick}>
        </div>
        {content || <Entry/>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isBodyModalDisplay: state.selectedDropdown,
    content: ownProps.children
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick:
  }
}

export default connect(mapStateToProps)(Body)
