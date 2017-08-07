import sinon from 'sinon'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetch from 'node-fetch'

import fetchAPI, { Schemas, FETCH_API } from '../../src/middlewares/fetchAPI'
import * as actions from '../../src/actions'

chai.use(chaiAsPromised);

const expect = chai.expect

const create = () => {
  const store = {
    getState: sinon.spy(),
    dispatch: sinon.spy()
  }

  const next = sinon.spy()
  const invoke = fetchAPI(store)(next)
  return { store, next, invoke }
}

const middlewares = [ thunk, fetchAPI ]
const mockStore = configureMockStore(middlewares)

describe('middlewares API', () => {
  it('should call next when passes non-fetchAPI action', () => {
    const { next, invoke } = create()
    const action = { type: 'NON_FETCH' }
    invoke(action)
    expect(next.calledOnce).to.be.true
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
    expect(() => invoke(action)).to.throw()
  })

  it('should return normalized object', () => {
    const API_ROOT = 'https://api.github.com',
          ENDPOINT = 'search/1',
          KEYWORD = 'xiao',
          FULL_NAME = 'reactjs/redux',
          LOGIN = 'reactjs'

    nock(API_ROOT)
      .defaultReplyHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "link": '<https://api.github.com/search/repositories?q=redux-thunk&page=2>; rel="next", <https://api.github.com/search/repositories?q=redux-thunk&page=22>; rel="last"'
      })
      .get('/' + ENDPOINT)
      .reply(200, {
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
          }]
    })

    const store = mockStore({
      entities: {
        users: {},
        repos: {}
      },
      pagination: {}
    })
    const action = {
      keyword: KEYWORD,
      [FETCH_API]: {
        types: [ 'request', 'success', 'failure' ],
        endpoint: ENDPOINT,
        schema: Schemas.REPO_SEARCH_RESULTS
      }
    }

    store.dispatch(action).then(res => {
      expect(res.type).to.equal('success')
      expect(res.keyword).to.equal(KEYWORD)
      const response = res.response
      expect(response[FETCH_API]).to.equal(undefined)
      expect(response.result.items[0]).to.equal(FULL_NAME)

      expect(response.entities.repo[FULL_NAME].name).to.equal('redux')
      expect(response.entities.user[LOGIN].login).to.equal(LOGIN)
    })
  })
})
