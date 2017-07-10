import React from 'react'
import { connect } from 'react-redux'

import { resetBodyModal } from '../../actions'
import Entry from './entry'
import style from './index.scss'

export class Body extends React.Component {

  render() {
    const { isBodyModalDisplay = false, content, resetBodyModal } = this.props
    return (
      <div>
        <div className={isBodyModalDisplay ? style['modal-active'] : style['modal-backdrop']}
          onClick={resetBodyModal}>
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

export default connect(mapStateToProps, {
  resetBodyModal
})(Body)
