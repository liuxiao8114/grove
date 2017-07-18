import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SignIn } from '../../../src/containers/body/signIn'

describe('<SignIn/>', () => {
  it('should render itself', () => {
    const wrapper = shallow(<SignIn/>)
    expect(wrapper.find('#login')).to.have.length(1)
    const signFormWrapper = wrapper.find('form')
    expect(signFormWrapper).to.have.length(1)
  })

  it('trigger submit', () => {
    const props = {
      dispatch: sinon.spy()
    }
    const wrapper = shallow(<SignIn {...props}/>)
    expect(wrapper.find('[value="Sign in"]')).to.have.length(1)
    wrapper.find('[value="Sign in"]').simulate('submit')
  })
})
