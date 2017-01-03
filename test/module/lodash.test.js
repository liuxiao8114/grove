/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */
import merge from 'lodash/merge'
import zip from 'lodash/zip'
import expect from 'expect'

describe('test lodash', () => {
  it('merge array', () => {
    let source = {
      a: [{b: 2},{c: 3}]
    }
    let target = {
      a: [{d: 4}, {e: 5}, {f: 6}]
    }

    let expectObject = {
      a:[{b: 2, d: 4}, {c: 3, e: 5}, {f: 6}]
    }
    expect(merge(target, source)).toEqual(expectObject)
  })

  it('merge object', () => {
    let target = {
      a: 1,
      b: 2,
      c: 3
    }
    let source = {
      a: 2,
      h: 8,
      obj: {
        a: 3,
        z: 26
      }
    }

    let source2 = [{a: 2}, {z: 26}]
    let expectObject = {
      a: 2,
      b: 2,
      c: 3,
      h: 8,
      obj: {
        a: 3,
        z: 26
      }
    }
    expect(merge(target, source)).toEqual(expectObject)
  })

  // zip([arrays])
  it('zip', () => {
    zip(['a', 'b'], [1, 2], [true. false])
  })
})
