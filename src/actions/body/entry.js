import { FETCH_API, Schemas } from '../../middlewares/fetchAPI'

export const USER_REPOS_REQUEST = 'USER_REPOS_REQUEST',
             USER_REPOS_SUCCESS = 'USER_REPOS_SUCCESS',
             USER_REPOS_FAILURE = 'USER_REPOS_FAILURE'

export const USER_REPOS_FILTER = 'USER_REPOS_FILTER'

const fetchUserRepos = (user, pageUrl) => ({
  user,
  [FETCH_API]: {
    types: [ USER_REPOS_REQUEST, USER_REPOS_SUCCESS, USER_REPOS_FAILURE ],
    endpoint: pageUrl,
    schema: Schemas.USER_OWN_REPOS
  }
})

export const loadUserRepositories = (filter, currentPage, perPage) => (dispatch, getState) => {
  const user = getState().currentUser.username
  if(!user) {
    throw new Error('we do not have user yet')
  }

  let url = `users/${user}/repos`
  if(filter || currentPage || perPage) {
    url += `?`
    if(filter) url += `q=${filter}&`
    if(currentPage) url += `page=${currentPage}&`
    if(perPage) url += `per_page=${perPage}&`
    url = url.slice(0, -1)
  }

  return dispatch(fetchUserRepos(user, url))
}

export const filterUserRepositories = filter => (dispatch, getState) => {
  const { items, isFetching } = getState().currentUser.userOwnRepos
  if(isFetching) {
    return
  }

  return dispatch({
    type: USER_REPOS_FILTER,
    keyword: filter,
    items: items || [],
    pageCount: 1
  })
}

export const loadAnnounceList = () => {
  return
}
