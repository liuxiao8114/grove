import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DropdownLink from '../../../src/components/header/DropdownLink'
import Dropdown from '../../../src/containers/header/Dropdown'

describe('<DropdownLink/>', () => {
  it('should render itself when userDropdown', () => {
    const props = {
      link: 'userLinks',
      name: 'user',
      tips: '',
      onClick: sinon.spy()
    }
    const wrapper = shallow(<DropdownLink {...props}/>),
          dropdownWrapperProps = wrapper.find(Dropdown).props()
    expect(wrapper.children().length).to.equal(2)
    wrapper.children().find('div').simulate('click')
    expect(props.onClick.calledOnce).to.be.true
    expect(dropdownWrapperProps.items).to.equal(props.link)
  })
})
