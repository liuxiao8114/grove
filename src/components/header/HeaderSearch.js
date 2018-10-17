import React from 'react'
import PropTypes from 'prop-types'
import style from './HeaderSearch.scss'
import { browserHistory } from 'react-router'

export default class HeaderSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(nextValue) {
    const DEFAULT_QUERY = {
      q: nextValue,
      type: 'repositories'
    }

    browserHistory.push({
      pathname: `/search`,
      query: DEFAULT_QUERY
    })
  }

  render() {
    const { inputValue } = this.props
    return (
      <div className={style['header-search']}>
        <form onSubmit={
          e => { e.preventDefault(); this.handleSubmit(this.input.value) }}>
          <label className={`${style['form-control']} ${style['header-search-wrapper']} ${style.focus}`}>
            <input className={style['header-search-input']}
                   ref={node => this.input = node}
                   defaultValue={inputValue}
                   type="text"
                   placeholder="Search Github"/>
          </label>
        </form>
      </div>
    )
  }
}

HeaderSearch.propTypes = {
  inputValue: PropTypes.string.isRequired
}
