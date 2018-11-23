import React, { Children } from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import { DropdownLinks } from '../../../src/containers/header/DropdownLinks'
import Dropdown from '../../../src/components/header/Dropdown'

const TEST_CURRENT_USER = {
  username: 'xiao'
}
const TEST_DROPDOWN_LINKS = [
  {
    id: `userLinks_0`,
    name: 'Noti',
    url: '/notifications',
    tips: 'You have unread notifications'
  },
  {
    id: `userLinks_1`,
    name: 'Repo',
    url: null,
    tips: 'Create new...',
    items: {
      repository: [
        { id: `repoDropdown_0`, name: 'New repository', url: '/new' },
        { id: `repoDropdown_1`, name: 'Import repository', url: '/import' },
        { id: `repoDropdown_2`, name: 'New gist', url: '/gist' }
      ]
    }
  }
]

describe('<DropdownLinks/>', () => {
  it('should render itself when userDropdown', () => {
    const store = {
      currentUser: TEST_CURRENT_USER,
      selectedDropdown: '',
      onClick: jest.fn()
    }
    const props = {
      links: TEST_DROPDOWN_LINKS,
      ...store
    }
    const instance = renderer.create(
      <DropdownLinks {...props}/>
    ).root

    expect(instance.children.length).toEqual(1)
    expect(instance.children[0].length).toEqual(1)
    //instance.children.find('div').simulate('click')
    //expect(props.onClick.calledOnce).to.be.true
    //expect(dropdownProps.items).to.equal(props.link)
  })
})

/*
class ProviderMock extends React.Component {
  getChildContext() {
    return { store: this.props.store }
  }
  render() {
    return Children.only(this.props.children)
  }
}

ProviderMock.childContextTypes = {
  store: PropTypes.object.isRequired
}
*/
