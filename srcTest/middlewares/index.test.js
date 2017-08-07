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
  it('passes non-fetchAPI action', () => {
    const { next, invoke } = create()
    const action = { type: 'NON_FETCH' }
    invoke(action)
    expect(next.calledOnce).to.be.true
  })

  it('passes fetch with not 3 types', () => {
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

  it('passes fetch ', () => {

    const endpoint = 'https://api.github.com/search/1'
    const API_ROOT = 'https://api.github.com'

    nock(API_ROOT)
      .get('/search/1')
      .reply(200, {
        "total_count": 53238,
        "incomplete_results": false,
        "items": [
          {
            "id": 36535156,
            "name": "redux",
            "full_name": "reactjs/redux",
            "owner": {
              "login": "reactjs",
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
      keyword: 'xiao',
      [FETCH_API]: {
        types: [ 'request', 'success', 'failure' ],
        endpoint: endpoint,
        schema: Schemas.REPO_SEARCH_RESULTS
      }
    }
    /*
    fetch(endpoint).then(response => response.json().then(json => {
        if(!response.ok) {
          return Promise.reject()
        }
        return Object.assign({}, json)
      })
    ).then(result => {
      expect(result).to.equal(undefined)
    })
    */

    store.dispatch(action).then(res => {
      console.log('********* async test! ************')
//      expect(res.type).to.equal('success')
      expect(res.response.result).to.equal('123')
//      expect(res.keyword).to.equal('xiao')
//      expect(res.response.result.id).to.equal('123')
    })

/*

*/
  })
})
