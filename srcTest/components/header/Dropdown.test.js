import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Provider } from 'react-redux'

import Dropdown from '../../../src/containers/header/Dropdown'
import DropdownItem from '../../../src/components/header/DropdownItem'

let udropdownID = 0, rDropdownId = 0

const dropdowns =  {
 userDropdown: [
   { id: 'userDropdown_' + udropdownID++, category: 'username', name: 'liuxiao8114' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Your profile', url: '/profile' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Your stars', url: '/stars' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Explore', url: '/explore' },
   { id: 'userDropdown_' + udropdownID++, category: 'systemItems', name: 'Setting', url: '/setting' }
 ],
 repoDropdown: [
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'New repository', url: '/new' },
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'Import repository', url: '/import' },
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'New gist', url: '/gist' }
 ]
}

describe('<Dropdown/>', () => {
  it('should render itself when userdropdown', () => {
    const props = {
      items: dropdowns.userDropdown,
      dropdownDisplay: false
    }
/*
    const wrapper = shallow(<Dropdown {...props}/>)
    const subComponentWrapper = wrapper.children()
    expect(subComponentWrapper.find('div').length).to.equal(1)
    expect(subComponentWrapper.find(DropdownItem).length).to.equal(1)
*/
  })
})
