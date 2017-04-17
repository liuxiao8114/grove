import React from 'react'

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
        <div>This is body waitting for edit!</div>
        <div className="modal-backdrop" onClick={this.handleClick}></div>
        {this.props.content}
      </div>
    )
  }
}
