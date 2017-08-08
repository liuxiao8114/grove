import sinon from 'sinon'
import { expect } from 'chai'

import paginate from '../../src/reducers/paginate'
import * as types from '../../src/actions'

const TEST_ACTION_KEY = 'testActionKey',
      TEST_TYPES = ['req', 'sus', 'fal']

function createReducer() {
  return paginate({
    mapActionToKey: TEST_ACTION_KEY,
    types: TEST_TYPES
  })
}

describe('paginate paginate', () => {
  it('should throw unexpected parmas', () => {
    expect(() => paginate({
      mapActionToKey: 'test',
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
  })

  it('should handle success action', () => {

  })

  it('should handle failure action', () => {

  })
})
