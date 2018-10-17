import React from 'react'
import TestRenderer from 'react-test-renderer'

import App from '../../../src/containers/app'

describe('app', () => {
  it('should render itself', () => {
    const wrapper = TestRenderer.create(<App/>)
  })
})
