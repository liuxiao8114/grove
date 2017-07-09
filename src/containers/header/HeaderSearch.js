import React from 'react'
import style from './HeaderSearch.scss'

export default class HeaderSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { inputValue, handleSubmit } = this.props
    return (
      <div className={style['header-search'] + ' ' + 'js-site-search'}>
        <form action="/search" onSubmit={() => { handleSubmit(this.input.value) }} method="get">
          <label className={style['form-control'] + ' ' + style['header-search-wrapper'] + ' ' + style.focus}>
            <input className={style['header-search-input']} ref={node => this.input = node}
               defaultValue={inputValue} type="text" placeholder="Search Github"/>
          </label>
        </form>
      </div>
    )
  }
}