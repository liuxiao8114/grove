import React from 'react'
import TestRenderer from 'react-test-renderer'
import SearchResult from '../../../src/components/body/search/SearchResult'

describe('search components index', () => {
  it('should render itself', () => {
    const wrapper = TestRenderer.create(<SearchResult/>)
    Search.protoype.componentWillMount()
    expect(wrapper.find('#login')).to.have.length(1)
    const signFormWrapper = wrapper.find()
    expect(signFormWrapper).to.have.length(1)
  })
})
