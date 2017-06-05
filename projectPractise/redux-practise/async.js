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

export const fetchPostsIfNeeded = reddit => (dispatch, state) => {

}

/* reducers*/
