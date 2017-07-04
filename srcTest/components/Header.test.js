/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../src/components/header/Header'
import UserLinks from '../../src/container/header/UserLinks'
import NavLinks from '../../src/container/header/NavLinks'
import HeaderSearch from '../../src/container/header/HeaderSearch.js'

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
    const { enzymeWrapper, props } = setup()
    const headerSearchWrapper = enzymeWrapper.find(HeaderSearch)
    expect(headerSearchWrapper).to.have.length(1)
    expect(headerSearchWrapper.props().inputValue).to.equal(props.inputValue)
    //expect(headerSearchWrapper.props().handleSubmit)
  })
})
