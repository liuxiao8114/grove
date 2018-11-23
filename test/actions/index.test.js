import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { FETCH_API, Schemas } from '../../src/middlewares/fetchAPI'
import * as actions from '../../src/actions'

jest.useFakeTimers()

describe('index actions test cases', () => {
  const SELECTED_DROPDOWN_ID = 'SELECTED_DROPDOWN_ID'
  it('select a dropdown and triggle SELECTED_DROPDOWN type', () => {
    const { type, id } = actions.selectedDropdown(SELECTED_DROPDOWN_ID)
    expect(type).toBe(actions.SELECTED_DROPDOWN)
    expect(id).toBe(SELECTED_DROPDOWN_ID)
  })

  it('resetBodyModal when triggle RESET_BODY_MODAL', () => {
    const { type } = actions.resetBodyModal()
    expect(type).toBe(actions.RESET_BODY_MODAL)
  })
})

describe('headerActions test cases', () => {

})

describe('bodyActions test cases', () => {
  const NO_TYPE = 'noType'
  const fetchAPIMock = () => next => action => {
    if(!action[FETCH_API]) return next(action)

    return next({
      type: NO_TYPE,
      ...action
    })
  }
  const middlewares = [ thunk, fetchAPIMock ]
  const mockStore = configureMockStore(middlewares)

  it('call loadRepoSearch and should return a repo fetchAPI', () => {
    const store = mockStore({ pagination: { repoSearch: {} } })
    const KEYWORD = 'xiao'
    const expectedFETCH_API = {
      types: [ actions.REPO_SEARCH_REQUEST, actions.REPO_SEARCH_SUCCESS, actions.REPO_SEARCH_FAILURE ],
      endpoint: `search/repositories?q=${KEYWORD}&page=1&per_page=10`,
      schema: Schemas.REPO_SEARCH_RESULTS
    }

    store.dispatch(actions.loadRepoSearch(KEYWORD))
    const receivedActions = store.getActions()

    expect(receivedActions[0].type).toBe(NO_TYPE)
    expect(receivedActions[0].keyword).toBe(KEYWORD)
    expect(receivedActions[0][FETCH_API]).toEqual(expectedFETCH_API)
  })

  it('call loadUserSearch and should return a user fetchAPI', () => {
    const store = mockStore({ pagination: { userSearch: {} } })
    const KEYWORD = 'xiao'
    const expectedFETCH_API = {
      types: [ actions.USER_SEARCH_REQUEST, actions.USER_SEARCH_SUCCESS, actions.USER_SEARCH_FAILURE ],
      endpoint: `search/users?q=${KEYWORD}&page=1&per_page=10`,
      schema: Schemas.USER_SEARCH_RESULTS
    }

    store.dispatch(actions.loadUserSearch(KEYWORD))
    const receivedActions = store.getActions()

    expect(receivedActions[0].type).toBe(NO_TYPE)
    expect(receivedActions[0].keyword).toBe(KEYWORD)
    expect(receivedActions[0][FETCH_API]).toEqual(expectedFETCH_API)
  })

  it('should return name&pass when calling sign in async', () => {
    const USERNAME = 'liuxiao8114',
          PASS = 1234,
          MAIL = 'liuxiao8114@163.com'

    const store = mockStore({})
    const expectedActions = [
      { type: actions.SIGN_IN_REQUEST },
      { type: actions.SIGN_IN_SUCCESS, username: USERNAME, password: PASS, publicEmail: MAIL }
    ]

    store.dispatch(actions.signInAsync(MAIL, PASS))
    jest.runOnlyPendingTimers()

    const receivedActions = store.getActions()
    expect(receivedActions[0]).toEqual(expectedActions[0])
    expect(receivedActions[1]).toEqual(expectedActions[1])
  })

  it('call loadUserRepositories and should return userRepos fetchAPI', () => {

  })
})
