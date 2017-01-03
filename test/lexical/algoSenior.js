/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */
import 'babel-polyfill';
import { expect } from 'chai';

function sym(...args) {
  let temp
  for(let arr in args){
    if(!temp) {
      temp = arr
      continue
    }

    arr.forEach(item => {
      if(!temp.include(item))
    })

    console.log()
  }
  return args;
}


describe('algoSenior', () => {
  it('', () => {

  })
})
