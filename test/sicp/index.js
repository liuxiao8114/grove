/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import 'babel-polyfill';
import { expect } from 'chai';
import toRegExp from 'path-to-regexp';
import fs from 'fs';

import { cons, car } from './chapterTwo/2.4Q.js'
//import myMap from './chapterTwo/map.js'
//import permutations from './chapterTwo/pairs.js'
import { Node, countNode, countNodeRightVer, isLoop } from './chapterThree/3.3.1.js'
import { fib, memoFib } from './chapterThree/3.3.3.js'

describe('SICP chapter2', () => {
  it('Question 2.4', () => {
    expect(car(cons(1, 2))).to.equal(1)
  })

  it('map', () => {
    /*
    const scale = (tree, n) => {
      myMap(subtree => {
        if(typeof subtree === 'object' || subtree instanceof Array) {
          scale(subtree, n)
        } else if() {

        } else {
          return subtree * n
        }
      }, tree)
    }
    expect(car(cons(1, 2))).to.equal(1)

    */
  })

  it('pairs', () => {
//    expect(permutations(1)).to.equal([[1, 2, 3], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
  })
})

describe('SICP chapter3', () => {
  let n1, n2, n3

  before(function() {
    n1 = new Node(),
    n2 = new Node(),
    n3 = new Node()
  });

  it('test 3-16 && 3-17', () => {
    n1.node = n2
    n1.next = n3
    n2.node = 'c'
    n2.next = n3
    n3.node = 'a'
    n3.next = 'b'

    expect(countNode(n1)).to.equal(4)
    expect(countNodeRightVer(n1)).to.equal(3)

    n1.node = n2
    n1.next = n2
    n2.node = n3
    n2.next = n3

    expect(countNode(n1)).to.equal(7)
    expect(countNodeRightVer(n1)).to.equal(3)
  })

  it('test 3-18 && 3-19', () => {
    n1.node = 'a'
    n1.next = n2
    n2.node = 'b'
    n2.next = n3
    n3.node = 'c'
    n3.next = n1
    expect(isLoop(n1)).to.equal(true)
    expect(isLoop(n2)).to.equal(true)
    expect(isLoop(n3)).to.equal(true)

    n1.node = n2
    n1.next = 'a'
    n2.node = n3
    n2.next = 'b'
    n3.node = n1
    n3.next = 'c'
    expect(isLoop(n1)).to.equal(true)
    expect(isLoop(n2)).to.equal(true)
    expect(isLoop(n3)).to.equal(true)

    n1.node = n3
    n1.next = 'a'
    n2.node = 'a'
    n2.next = 'b'
    n3.node = 'b'
    n3.next = n1
    expect(isLoop(n1)).to.equal(true)
    expect(isLoop(n2)).to.equal(false)
    expect(isLoop(n3)).to.equal(true)
  })

  it('test 3-27', () => {
    expect(fib(4)).to.equal(3)
    expect(memoFib(4)).to.equal(3)
  })
})
