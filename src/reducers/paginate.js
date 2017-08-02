import { union } from 'lodash'

const paginate = ({ mapActionToKey, types }) => {
  const [ requestType, successType, failtureType ] = types

  const updatePaginate = (state = {
    keyword: '',
    isFetching: false,
    nextPageUrl: '',
    pageCount: 0,
    ids: []
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
          ids: union(state.ids, action.response.result),
          nextPageUrl: action.nextPageUrl,
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
