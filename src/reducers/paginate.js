import { union } from 'lodash'

const initialState = {
  isFetching: false,
  ids: []
}

const paginate = ({ mapActionToKey, types }) => {
  const [ requestType, successType, failtureType ] = types

  const updatePaginate = (state = {
    isFetching: false,
    nextPageUrl: '',
    pageCount: 0,
    ids: []
  }, action) => {
    switch(action.type) {
      case requestType: {
        return {
          ...state,
          isFetching: true
        }
      }
      case successType: {
        return {
          isFetching: false,
          ids: union(state.ids, action.response.result),
          nextPageUrl: action.nextPageUrl,
          pageCount: state.pageCount++
        }
      }
      case failtureType: {
        return {
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
        const actionKey = mapActionToKey(action)
        if(typeof actionKey !== 'string') {
          throw new Error('Exect action key to be a string')
        }
        return updatePaginate(state, actionKey)
      }
      default:
        return state
    }
  }
}

export default paginate
