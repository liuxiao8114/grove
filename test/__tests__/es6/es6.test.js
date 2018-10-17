import * as actions from ''
import fetch from 'node-fetch'

jest.mock('fetch')

const KEY_1 = 'KEY_1'
const KEY_2 = 'KEY_2'
const KEY_3 = 'KEY_3'

function foo() {
  let a, b, c
  const p = new Promise(resolve => {
    a = KEY_1
    resolve(a)
  })

  b = KEY_2

  return p.then(data => {
    c = data + KEY_3
    return { a, b, c }
  })
}

describe('test promise', () => {
  it('using done test promise', done => {
    foo().then(({ a, b, c}) => {
      expect(a).toBe(KEY_1)
      expect(b).toBe(KEY_2)
      expect(c).toEqual(KEY_1 + KEY_3)
      done()
    })
  })

  it('using Prmoise with return ', () =>
    foo().then(({ a, b, c}) => {
      expect(a).toBe(KEY_1)
      expect(b).toBe(KEY_2)
      expect(c).toEqual(KEY_1 + KEY_3)
    })
  )
})

/*
describe('jest mock cases', () => {
  it('mock fetch module', () => {
    function bar(url) {
      return fetch(url)
    }

    fetch.get.mockResolvedValue()
  })
})

*/
