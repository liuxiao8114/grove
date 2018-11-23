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

export const loadUserRepositories = (user, currentPage, perPage) => (dispatch, getState) => {
  if(!user) {
    user = getState().currentUser.username
  }

  let url = `users/${user}/repos`
  if(currentPage && perPage) {
    url += `?page=${currentPage}&per_page=${perPage}`
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
    items: [],
    pageCount: 1
  })

}

export const loadAnnounceList = () => {

}
