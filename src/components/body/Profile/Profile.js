import React from 'react'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          Avatar
          <button>Edit profile</button>
        </div>
        <div>ProTip!</div>
        <div>Overview</div>
      </div>
    )
  }
}
