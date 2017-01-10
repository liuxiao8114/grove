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
  return r
}

range.methods = {
  includes: o => {
    if(typeof o !== 'number') return 'err type'
    return o >= this.from && o <= this.to
  },
  forEach: f => {
    for(let i = this.from; i <= this.to; i++) {
      f(i)
    }
  },
  toString: () => {
    return this.from + '...' + this.to
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
