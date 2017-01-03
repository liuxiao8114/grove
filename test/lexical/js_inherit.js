/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */
import 'babel-polyfill';
import { expect } from 'chai';
import toRegExp from 'path-to-regexp';
import fs from 'fs';

function inherit(p) {
  function f() {}
  f.prototype = p
  return new f()
}

function range(from, to) {
  let r = inherit(range.methods)
  r.from = from
  r.to = to
  return r
}

range.methods = {
  includes(n) {
    for(let i = this.from; i <= this.to; i++) {
      if(n === i) { return true }
    }
    return false
  },
  forEach(f) {
    let that = this
    for(let i = this.from; i <= this.to; i++) {
      f.call(that, (i - this.from))
    }
  },
  toString() {
    return this.from + '...' + this.to
  },
  get(index) {
    return index < (this.to - this.from) ?
    (index - this.from) : 'not in range!'
  }
}

describe('js prototype & class', () => {
  it('range',() => {
    let r = range(1, 3)
    expect(r.includes(2)).to.equal(true)
    expect(r.forEach(r.get)).to.equal(undefined)
    expect(r.toString()).to.equal('1...3')
  })
})
