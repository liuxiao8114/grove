import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import fetchAPI from '../../src/middlewares/fetchAPI'
import * as actions from '../../src/actions'

jest.useFakeTimers()

const middlewares = [ thunk, fetchAPI ]
const mockStore = configureMockStore(middlewares)
const SELECTED_DROPDOWN_ID = 'SELECTED_DROPDOWN_ID'

describe('actions', () => {
  it('select a dropdown and triggle SELECTED_DROPDOWN type', () => {
    const { type, id } = actions.selectedDropdown(SELECTED_DROPDOWN_ID)
    expect(type).toBe(actions.SELECTED_DROPDOWN)
    expect(id).toBe(SELECTED_DROPDOWN_ID)
  })

  it('resetBodyModal when triggle RESET_BODY_MODAL', () => {
    const { type } = actions.resetBodyModal()
    expect(type).toBe(actions.RESET_BODY_MODAL)
  })

  it('should return name&pass calling sign in async', () => {
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

  it('', () => {

  })
})
