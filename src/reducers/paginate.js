import { union } from 'lodash'

export const USER_SERACH = 'userSearch',
             REPO_SERACH = 'repoSearch',
             USER_OWN_REPOS = 'userOwnRepos'

const PAGINATE_ACTION_KEYS = {
  [USER_SERACH]: { key: 'keyword', items: 'items' },
  [REPO_SERACH]: { key: 'keyword', items: 'items' },
  [USER_OWN_REPOS]: { key: 'user', items: 'repos' }
}

const paginate = ({ mapActionToKey, types }) => {
  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error(`types must be an Array and have length 3`)
  }

  const [ requestType, successType, failureType ] = types
  const updatePaginate = (key = 'keyword', items = 'items') => (state = {
    [key]: '',
    [items]: [],
    isFetching: false,
    nextPageUrl: '',
    pageCount: 0,
    totalCount: 0
  }, action) => {
    switch(action.type) {
      case requestType: {
        return {
          ...state,
          [key]: action[key],
          isFetching: true
        }
      }
      case successType: {
        return {
          [key]: action[key],
          [items]: union(state[items], action.response.result[items]),
          isFetching: false,
          totalCount: action.response.result.total_count,
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount++
        }
      }
      case failureType: {
        return {
          ...state,
          [key]: action[key],
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
        const { key, items } = PAGINATE_ACTION_KEYS[mapActionToKey]
        return updatePaginate(key, items)(state[mapActionToKey], action)
      }
      default:
        return state
    }
  }
}

export default paginate
