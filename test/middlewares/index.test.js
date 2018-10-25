import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import fetchAPI, { Schemas, FETCH_API } from '../../src/middlewares/fetchAPI'
import * as actions from '../../src/actions'

const mockGetState = jest.fn(),
      mockDispatch = jest.fn(),
      mockNext = jest.fn()

const create = () => {
  const store = {
    getState: mockGetState,
    dispatch: mockDispatch
  }

  return { store, next: mockNext, invoke: fetchAPI(store)(mockNext) }
}

const middlewares = [ thunk, fetchAPI ]
const mockStore = configureMockStore(middlewares)

describe('middleware fetchAPI testcases', () => {
  it('should call next when passes non-fetchAPI action', () => {
    const { next, invoke } = create()
    const action = { type: 'NON_FETCH' }
    invoke(action)
    expect(next.mock.calls.length).toBe(1)
  })

  it('should throw error when passes fetch with not 3 types', () => {
    const { invoke } = create()
    const action = {
      keyword: 'xiao',
      [FETCH_API]: {
        types: [ '1', '2' ],
        endpoint: 'github.com',
        schema: Schemas.REPO
      }
    }
    expect(() => invoke(action)).toThrow(/in FETCH_API there must have 3 types but now got: 2/)
  })

  it('should return normalized repo', () => {
    const API_ROOT = 'https://api.github.com',
          ENDPOINT = 'search/1',
          KEYWORD = 'xiao',
          FULL_NAME = 'reactjs/redux',
          LOGIN = 'reactjs',
          nextPageUrl = 'https://api.github.com/search/repositories?q=redux-thunk&page=2',
          lastPageUrl = 'https://api.github.com/search/repositories?q=redux-thunk&page=22'

    fetchMock.mock(
      `${API_ROOT}/${ENDPOINT}`,
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "link": `<${nextPageUrl}>; rel=\"next\", <${lastPageUrl}>; rel=\"last\"`
        },
        body: {
          "total_count": 53238,
          "incomplete_results": false,
          "items": [
            {
              "id": 36535156,
              "name": "redux",
              "full_name": FULL_NAME,
              "owner": {
                "login": LOGIN,
                "id": 6412038,
                "type": "Organization",
                "site_admin": false
              }
            }
          ]
        }
      }
    )
    const store = mockStore({
      entities: { users: {}, repos: {} }
    })
    const action = {
      keyword: KEYWORD,
      [FETCH_API]: {
        types: [ actions.REPO_SEARCH_REQUEST, actions.REPO_SEARCH_SUCCESS, actions.REPO_SEARCH_FAILURE ],
        endpoint: ENDPOINT,
        schema: Schemas.REPO_SEARCH_RESULTS
      }
    }

    return store.dispatch(action).then(res => {
      expect(res.type).toEqual(actions.REPO_SEARCH_SUCCESS)
      expect(res.keyword).toEqual(KEYWORD)

      const response = res.response
      expect(response[FETCH_API]).toEqual(undefined)
      expect(response.result.items[0]).toEqual(FULL_NAME)
      expect(response.entities.repositories[FULL_NAME].name).toEqual('redux')
      expect(response.entities.users[LOGIN].login).toEqual(LOGIN)
      expect(response.nextPageUrl).toEqual(nextPageUrl)
    })
  })
})
