import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SignIn from '../../../src/containers/body/signIn'
import SignInForm from '../../../src/containers/body/signIn/SignInForm'

describe('<SignIn/>', () => {
  it('should render itself', () => {
    const wrapper = shallow(<SignIn/>)
    expect(wrapper.find('#login')).to.have.length(1)
    const signFormWrapper = wrapper.find(SignInForm)
    expect(signFormWrapper).to.have.length(1)
  })
})
