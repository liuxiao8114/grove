import { FETCH_API, Schemas } from '../../middlewares/fetchAPI'

const USER_REPOS_SEARCH_REQUEST = 'USER_REPOS_SEARCH_REQUEST',
      USER_REPOS_SEARCH_SUCCESS = 'USER_REPOS_SEARCH_SUCCESS',
      USER_REPOS_SEARCH_FAILURE = 'USER_REPOS_SEARCH_FAILURE'

const fetchRepoSearch = (keyword, nextPageUrl) => ({
  keyword,
  [FETCH_API]: {
    types: [ USER_REPOS_SEARCH_REQUEST, USER_REPOS_SEARCH_SUCCESS, USER_REPOS_SEARCH_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.REPOS_SEARCH_RESULTS
  }
})

const loadUserRepositories = (user, currentPage = 1, perPage = 10 )=> {
  let nextPageUrl =
    `search/repositories?page=${currentPage}&per_page=${perPage}`

}
