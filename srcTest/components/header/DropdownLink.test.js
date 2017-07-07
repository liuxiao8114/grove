import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DropdownLink from '../../../src/components/header/DropdownLink'
import Dropdown from '../../../src/components/header/Dropdown'

describe('<DropdownLink/>', () => {
  it('should render itself when userDropdown', () => {
    const props = {
      link: 'userLinks',
      name: 'user',
      tips: '',
      onClick: sinon.spy(),
      isDisplay: false
    }
    const wrapper = shallow(<DropdownLink {...props}/>),
          parentDivWrapper = wrapper.children(),
          subDivWrapper = parentDivWrapper.find('div'),
          dropdownWrapperProps = wrapper.find(Dropdown).props()
    expect(parentDivWrapper.length).to.equal(2)
    subDivWrapper.simulate('click')
    expect(props.onClick.calledOnce).to.be.true
    expect(dropdownWrapperProps.items).to.equal(props.link)
    expect(dropdownWrapperProps.dropdownDisplay).to.equal(props.isDisplay)
  })
})
