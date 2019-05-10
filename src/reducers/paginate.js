import { union } from 'lodash'

export const USER_SERACH = 'userSearch',
             REPO_SERACH = 'repoSearch',
             USER_OWN_REPOS = 'userOwnRepos'

const paginateSearch = ({ mapActionToKey, types, queryName }) => {
  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error(`types must be an Array and have length 3`)
  }

  const [ requestType, successType, failureType ] = types
  const updatePaginate = (state = {
    [queryName]: '',
    items: [],
    isFetching: false,
    nextPageUrl: null,
    pageCount: 0,
    totalCount: 0
  }, action) => {
    switch(action.type) {
      case requestType: {
        return {
          ...state,
          [queryName]: action[queryName],
          isFetching: true
        }
      }
      case successType: {
        return {
          [queryName]: action[queryName],
          items: union(state.items, action.response.result.items),
          isFetching: false,
          totalCount: action.response.result.total_count,
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount++
        }
      }
      case failureType: {
        return {
          ...state,
          [queryName]: action[queryName],
          isFetching: false
        }
      }
      default:
        return state
    }
  }

  return (state = {}, action) => {
    switch(action.type) {
      case requestType:
      case successType:
      case failureType: {
        if(typeof mapActionToKey !== 'string') {
          throw new Error('Exect action key to be a string')
        }
        return updatePaginate(state[mapActionToKey], action)
      }
      default:
        return state
    }
  }
}

const paginateUserRepos = ({ mapActionToKey, types, queryName }) => {
  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error(`types must be an Array and have length 3`)
  }
  const [ requestType, successType, failureType ] = types
  const updatePaginate = (state = {
    [queryName]: '',
    items: [],
    isFetching: false,
    nextPageUrl: null,
    pageCount: 0,
    totalCount: 0
  }, action) => {
    switch(action.type) {
      case requestType: {
        return {
          ...state,
          [queryName]: action[queryName],
          isFetching: true
        }
      }
      case successType: {
        const items = action.response.result
        return {
          [queryName]: action[queryName],
          items: union(state.items, items),
          isFetching: false,
          totalCount: items.length,
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount !== 1 ? state.pageCount++ : state.pageCount
        }
      }
      case failureType: {
        return {
          ...state,
          [queryName]: action[queryName],
          isFetching: false
        }
      }
      default:
        return state
    }
  }

  return (state = {}, action) => {
    switch(action.type) {
      case requestType:
      case successType:
      case failureType: {
        if(typeof mapActionToKey !== 'string') {
          throw new Error('Exect action key to be a string')
        }
        return updatePaginate(state[mapActionToKey], action)
      }
      default:
        return state
    }
  }
}

export { paginateSearch, paginateUserRepos }
