import sinon from 'sinon'
import { expect } from 'chai'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import fetchAPI, { Schemas, FETCH_API } from '../../src/middlewares/fetchAPI'
import * as actions from '../../src/actions'

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

    const endpoint = 'search'
    const API_ROOT = 'https://api.github.com/'

    nock(API_ROOT)
      .get(endpoint)
      .reply(200, {

      })

    const store = mockStore({ pagination: {} })
    const action = {
      keyword: 'xiao',
      [FETCH_API]: {
        types: [ 'request', 'success', 'failure' ],
        endpoint: endpoint,
        schema: Schemas.REPO
      }
    }


    store.dispatch(action).then(res => {
      expect()
    })
  })
})
