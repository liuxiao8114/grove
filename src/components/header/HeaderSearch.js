import React from 'react'

export default class HeaderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {

  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form action="/search">
          <label className="form-control header-search-wrapper focus">
            <input className="header-search-input js-site-search-focus" type="text" placeholder="Search Github"/>
          </label>
        </form>
      </div>
    )
  }
}
