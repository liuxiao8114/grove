import React from 'react'
import style from './index.scss'
import Entry from './entry'

export default class Body extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.handleModalClick(e)
  }

  render() {
    return (
      <div>
        <div className={this.props.modalDisplay ? style['modal-active'] : style['modal-backdrop']}
          onClick={this.handleClick}>
        </div>
        {this.props.content || <Entry/>}
      </div>
    )
  }
}
