import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { UserLinks } from '../../../src/containers/header/UserLinks'
import HeaderLink from '../../../src/components/header/HeaderLink'
import DropdownLink from '../../../src/components/header/DropdownLink'

describe('<UserLinks/>', () => {
  it('should only render itself when no link', () => {
    const wrapper = shallow(<UserLinks/>)
    expect(wrapper.find('ul').length).to.equal(1)
    expect(wrapper.find('ul').children().length).to.equal(0)
  })

  it('should render HeaderLink', () => {
    let userId = 0
    const props = {
      links: [
        { id: userId++, name: 'Noti', url: '/notifications', tips: 'You have unread notifications', dropdownId: null },
        { id: userId++, name: 'Noti', url: '/notifications', tips: 'You have unread notifications', dropdownId: null }
      ],
      onClick: sinon.spy(),
      selectedDropdown: null
    }
    const subComponentsWrapper = shallow(<UserLinks {...props}/>).find('#user-links').children()
    expect(subComponentsWrapper.length).to.equal(2)
    expect(subComponentsWrapper.find(HeaderLink).length).to.equal(2)
  })

  it('should render DropdownLink', () => {
    let userId = 0
    const props = {
      links: [
        { id: userId++, name: 'Noti', url: '/notifications', tips: 'You have unread notifications', dropdownId: null },
        { id: userId++, name: 'Repo', url: null, tips: 'Create new...', dropdownId: 'repoDropdown' },
        { id: userId++, name: 'User', url: null, tips: 'View profile and more', dropdownId: 'userDropdown' }
      ],
      onClick: sinon.spy()
    }
    const wrapper = shallow(<UserLinks {...props}/>)
    expect(wrapper.children().length).to.equal(3)
    const dropdownLinksWrapper = wrapper.find(DropdownLink)
    expect(dropdownLinksWrapper).to.have.length(2)
    const userWrapper = dropdownLinksWrapper.find('[name="User"]')
    userWrapper.simulate('click')
    expect(props.onClick.calledOnce).to.be.true
  })

  it('should display Dropdown when selected', () => {
    let userId = 0
    const props = {
      links: [
        { id: userId++, name: 'Repo', url: null, tips: 'Create new...', dropdownId: 'repoDropdown' },
        { id: userId++, name: 'User', url: null, tips: 'View profile and more', dropdownId: 'userDropdown' }
      ],
      onClick: sinon.spy(),
      selectedDropdown: 'repoDropdown'
    }
    const wrapper = shallow(<UserLinks {...props}/>)
    const userDropdownWrapper = wrapper.find('[name="User"]')
    expect(userDropdownWrapper.props().isDisplay).to.equal.false
    const repoDropdownWrapper = wrapper.find('[name="Repo"]')
    expect(repoDropdownWrapper.props().isDisplay).to.be.ture
  })
})
