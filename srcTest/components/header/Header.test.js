import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../../src/components/header/Header'
import UserLinks from '../../../src/containers/header/UserLinks'
import NavLinks from '../../../src/containers/header/NavLinks'
import HeaderSearch from '../../../src/containers/header/HeaderSearch.js'

const setup = () => {
  const TEST_VALUE = 'test value'
  const props = {
    inputValue: TEST_VALUE,
    handleSubmit: sinon.spy()
  }
  const wrapper = shallow(<Header {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Header/>', () => {
  it('should render itself with props and subcomponents', () => {
    const { wrapper, props } = setup()
    const headerSearchWrapper = wrapper.find(HeaderSearch)
    expect(headerSearchWrapper).to.have.length(1)
    expect(headerSearchWrapper.props().inputValue).to.equal(props.inputValue)
  })

  it('should add history when call handleSubmit', () => {
    // headerSearchWrapper.props().handleSubmit()
    // expect(props.handleSubmit.calls.length).to.be(1)
  })
})
