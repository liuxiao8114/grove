import * as actions from '../actions'

const loadUser = (state = {
  
}, action) => {
  switch (action.type) {
    case actions.USER_REQUEST: {

    }
  }
}

const loadRepo = (state, action) => {

}

const entities = ({ users, repos }, action) => {
  switch (action.type) {
    case actions.USER_SUCCESS:
    case actions.USER_FAILURE:
    case actions.USER_REQUEST:
      return loadUser(users, action)
    case actions.REPO_SUCCESS:
    case actions.REPO_FAILURE:
    case actions.REPO_REQUEST:
      return loadRepo(users, action)
    default:
      return { users, repos }
  }
}
