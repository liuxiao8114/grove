import { union } from 'lodash'

const paginate = ({ mapActionToKey, types }) => {
  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error(`types must be an Array and have length 3`)
  }

  const [ requestType, successType, failtureType ] = types

  const updatePaginate = (state = {
    keyword: '',
    isFetching: false,
    nextPageUrl: '',
    pageCount: 0,
    totalCount: 0,
    items: []
  }, action) => {
    switch(action.type) {
      case requestType: {
        return {
          ...state,
          keyword: action.keyword,
          isFetching: true
        }
      }
      case successType: {
        return {
          keyword: action.keyword,
          isFetching: false,
          items: union(state.items, action.response.result.items),
          totalCount: action.response.result.total_count,
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount++
        }
      }
      case failtureType: {
        return {
          ...state,
          keyword: action.keyword,
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
      case failtureType: {
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

export default paginate
