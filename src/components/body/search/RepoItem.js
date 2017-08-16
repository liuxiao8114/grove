import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import style from './RepoItem.scss'
import { languageColor } from '../../../data-config.js'

class RepoItem extends Component {
  renderTopic() {

  }

  render() {
    const { full_name,
            html_url,
            description = null,
            language,
            topic = null,
            stargazers_count = 0,
            updated_at
          } = this.props.item
    return (
      <div className={style['repo-list-item']}>
        <div className={style['main-column']}>
          <h3><Link to={html_url}>{full_name}</Link></h3>
          { description && <p className={style['description']}>{description}</p> }
          { topic && this.renderTopic(topic) }
          <p>{updated_at}</p>
        </div>
        <div className={style['middle-column']}>
          <span className={style['repo-language-color']}
            style={{ backgroundColor: '#e99' }}></span>
          {language}
        </div>
        <div className={style['right-column']}>
          <Link className={style['muted-link']} to="#">
            <svg className="octicon octicon-star" aria-label="star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14">
              <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/>
            </svg>
            {stargazers_count}
          </Link>
        </div>
      </div>
    )
  }
}

RepoItem.propTypes = {
  item: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  })
}

export default RepoItem

/*
  style={languageColor[language] && ('background-color: ' + languageColor[language])}></span>

*/


/*
<div class="repo-list-item d-flex flex-justify-start py-4 public source">
  <div class="col-8 pr-3">
    <h3>
      <a class="v-align-middle" href="/damonare/memos">damonare/memos</a>
    </h3>
    <p class="col-9 d-inline-block text-gray mb-2 pr-4">
      <em>React</em>
      +
      <em>React</em>
      -router+redux+redux-
      <em>thunk</em>
      +less+es6实现的简易备忘录，在线demo地址：
    </p>
    <div class="topics-row-container col-9 d-inline-flex flex-wrap flex-items-center f6 my-1">
      <a class="topic-tag topic-tag-link f6 my-1" href="/search?q=topic%3Areact&type=Repositories" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:react,repository_id:76015360,repository_nwo:damonare/memos,repository_public:true,repository_is_fork:false"> react </a>
      <a class="topic-tag topic-tag-link f6 my-1" href="/search?q=topic%3Aredux&type=Repositories" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:redux,repository_id:76015360,repository_nwo:damonare/memos,repository_public:true,repository_is_fork:false"> redux </a>
      <a class="topic-tag topic-tag-link f6 my-1" href="/search?q=topic%3Aless&type=Repositories" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:less,repository_id:76015360,repository_nwo:damonare/memos,repository_public:true,repository_is_fork:false"> less </a>
      <a class="topic-tag topic-tag-link f6 my-1" href="/search?q=topic%3Areact-router&type=Repositories" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:react-router,repository_id:76015360,repository_nwo:damonare/memos,repository_public:true,repository_is_fork:false"> react-router </a>
      <a class="topic-tag topic-tag-link f6 my-1" href="/search?q=topic%3Aes6&type=Repositories" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:es6,repository_id:76015360,repository_nwo:damonare/memos,repository_public:true,repository_is_fork:false"> es6 </a>
    </div>
    <p class="f6 text-gray mb-0 mt-2">
      Updated
      <relative-time datetime="2017-05-31T05:49:41Z" title="2017年5月31日 GMT+8 下午1:49">on 31 May</relative-time>
    </p>
  </div>
  <div class="d-table-cell col-2 text-gray pt-2">
    <span class="repo-language-color ml-0" style="background-color:#f1e05a;"></span>
    JavaScript
  </div>
  <div class="col-2 text-right pt-1 pr-3 pt-2">
    <a class="muted-link" href="damonare/memos/stargazers">
      <svg class="octicon octicon-star" aria-label="star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14">
        <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z">
      </svg>
      77
    </a>
  </div>
</div>
*/
