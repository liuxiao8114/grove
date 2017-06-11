import React from 'react'

const SELECT_REDDIT = 'SELECT_REDDIT'
const INVAILDATE_REDDIT = 'INVAILDATE_REDDIT'

const selectReddit = reddit => {
  type: SELECT_REDDIT,
  reddit
}

const invaildateReddit = reddit => {
  type: INVAILDATE_REDDIT,
  reddit
}

const REQUEST_POSTS = 'REQUEST_POSTS'
const RESPONSE_POSTS = 'RESPONSE_POSTS'

const requestPosts = reddit => {
  return {
    type: REQUEST_POSTS,
    isFetching: true,
    reddit
  }
}

const receivePosts = (reddit, json) => {
  return {
    type: RESPONSE_POSTS,
    reddit,
    posts: json.data.children.map(),
    receivedAt: Date.now()
  }
}

const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit))
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)))
}

const shouldFetchPosts = (state, reddit) => {
  const post = state.posts[reddit]
  if(!post) {
    return true
  } else if(state.isFetching) {
    return false
  }

  return post.didInvaildate
}

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
  if(shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit))
  }
}

/*components */
const Picker = ({ value, options, onChange }) => {
  return (

  )
}

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, i) => {
        return <li key={i}>{post.title}</li>
      })}
    </ul>
  )
}

/*containers*/
class App extends React.Component {
  componentDidMount() {
    const { dispatch, selectedReddit }  = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.selectedReddit !== nextProps.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(nextProps))
    }
  }

  handleChange(nextReddit) {
    const { dispatch }  = this.props
    dispatch(fetchPostsIfNeeded(selectReddit(nextReddit)))
  }

  handleRefreshClick(e) {
    e.preventDefaultEvent()
    const { selectedReddit, dispatch } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    const { posts, selectedReddit, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker onChange={this.handleChange} value={selectedReddit} options={['reactjs', 'frontend']}/>
        <p>
        {
          lastUpdated && lastUpdated at {new Date(lastUpdated).toLocaleTimeString()}
        }
        {
          !isFetching && <button onClick={this.handleRefreshClick}>Refresh</button>
        }
        </p>
        {isEmpty ?
          (isFetching ? <h2>Loading... {' ' + selectedReddit}</h2> : <h2>Empty</h2>) :
          <div style={{opacity: isFetching ? 0.5 : 1}}>
            <Post posts={posts}/>
          </div>
        }
      </div>
    )
  }
}


/* reducers*/
