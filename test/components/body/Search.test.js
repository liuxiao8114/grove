import React from 'react'
import TestRenderer from 'react-test-renderer'
import Search from '../../../src/containers/body/search'

describe('search components index', () => {
  it('should render itself', () => {
    const wrapper = TestRenderer.create(<Search/>)
    Search.protoype.componentWillMount()
    expect(wrapper.find('#login')).to.have.length(1)
    const signFormWrapper = wrapper.find()
    expect(signFormWrapper).to.have.length(1)
  })
})
