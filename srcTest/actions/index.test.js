import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'

import * as actions from '../../src/actions'

describe('actions', () => {
  it('should return an object with name&pass', () => {
    let name = 1234, pass = 12345,
        result = actions.signIn(name, pass)
    expect(result.username).to.equal(name)
    expect(result.password).to.equal(pass)
    expect(result.publicEmail).to.equal(null)

    name = 'liuxiao8114@163.com', pass = 1234
    result = actions.signIn(name, pass)
    expect(result.username).to.equal('liuxiao8114')
    expect(result.password).to.equal(pass)
    expect(result.publicEmail).to.equal(name)
  })
})
