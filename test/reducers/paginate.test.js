import sinon from 'sinon'
import { expect } from 'chai'

import paginate from '../../src/reducers/paginate'
import * as types from '../../src/actions'

const TEST_ACTION_KEY = 'testActionKey',
      KEYWORD = 'xiao',
      TEST_TYPES = ['req', 'sus', 'fal'],
      TEST_REQUEST_ACTION = {
        type: 'req',
        keyword: KEYWORD
      },
      TEST_SUCCESS_ACTION = {
        type: 'sus',
        keyword: KEYWORD,
        response: {
          entities: {
            users: {
              xiao: {
                login: 'xiao'
              }
            },
            repos: {
              lei: {
                full_name: 'lei'
              }
            }
          },
          result: {
            items: [
              'lei'
            ]
          }
        }
      }

function createReducer() {
  return paginate({
    mapActionToKey: TEST_ACTION_KEY,
    types: TEST_TYPES
  })
}

describe('Reducer test: paginate', () => {
  it('should throw unexpected parmas', () => {
    expect(() => paginate({
      mapActionToKey: TEST_ACTION_KEY,
      types: [1, 2, 3, 4]
    })).to.throw()

    expect(() => paginate({
      mapActionToKey: () => {},
      types: [1, 2, 3]
    })()).to.throw()
  })

  it('should return initial state ', () => {
    const reducer = createReducer()
    expect(Object.keys(reducer(undefined, {}))).have.length(0)
  })

  it('should handle request action', () => {
    const reducer = createReducer()
    const result = reducer({}, TEST_REQUEST_ACTION)
    expect(result.keyword).to.equal(KEYWORD)
    expect(result.isFetching).to.be.true
  })

  it('should handle success action', () => {
    const reducer = createReducer()
    const result = reducer({}, TEST_SUCCESS_ACTION)
    expect(result.items[0]).to.equal('lei')
  })

  it('should handle failure action', () => {

  })
})
