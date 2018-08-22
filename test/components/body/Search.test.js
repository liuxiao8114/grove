import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Search from '../../../src/containers/body/search'

describe('search components index', () => {
  it('should render itself', () => {
    const wrapper = mount(<Search/>)
    Search.protoype.componentWillMount()
    expect(wrapper.find('#login')).to.have.length(1)
    const signFormWrapper = wrapper.find()
    expect(signFormWrapper).to.have.length(1)
  })
})
