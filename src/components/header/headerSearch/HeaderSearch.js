import React from 'react'
import style from './HeaderSearch.scss'

export default class HeaderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toUpperCase() })
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  render() {
    return (
      <div className={style['header-search'] + ' ' + 'js-site-search'}>
        <form action="/search" onSubmit={this.handleSubmit}>
          <label className={style['form-control'] + ' ' + style['header-search-wrapper'] + ' ' + style.focus}>
            <input className={style['header-search-input']} value={this.state.value}
              onChange={this.handleChange} type="text" placeholder="Search Github"/>
          </label>
        </form>
      </div>
    )
  }
}
