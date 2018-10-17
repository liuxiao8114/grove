import React from 'react'
import jest from 'jest'
import renderer from 'react-test-renderer'

import DropdownLinks from '../../../src/containers/header/DropdownLinks'
import Dropdown from '../../../src/components/header/Dropdown'

describe('<DropdownLinks/>', () => {
  it('should render itself when userDropdown', () => {
    const props = {
      link: 'userLinks',
      name: 'user',
      tips: ''
//      onClick: jest.mock()
    }
    const instance = renderer.create(<DropdownLinks {...props}/>).root,
          dropdownProps = instance.find(Dropdown).props()
    expect(instance.children.length).to.equal(2)
    //instance.children.find('div').simulate('click')
    //expect(props.onClick.calledOnce).to.be.true
    //expect(dropdownProps.items).to.equal(props.link)
  })
})
