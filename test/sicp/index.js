/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import 'babel-polyfill';
import { expect } from 'chai';
import toRegExp from 'path-to-regexp';
import fs from 'fs';

import { cons, car } from './chapterTwo/2.4Q.js'
//import myMap from './chapterTwo/map.js'
import permutations from './chapterTwo/pairs.js'

describe('SICP chap2', () => {
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
    expect(permutations(1)).to.equal([[1, 2, 3], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
  })
})
