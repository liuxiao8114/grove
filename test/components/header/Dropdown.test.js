import React from 'react'
import renderer from 'react-test-renderer'
import Dropdown from '../../../src/components/header/Dropdown'

const [ repoDropdown, userDropdown ] = [
  {
    id: `userLinks_1`,
    name: 'Repo',
    url: null,
    tips: 'Create new...',
    items: [
      { id: `repoDropdown_0`, name: 'New repository', url: '/new' },
      { id: `repoDropdown_1`, name: 'Import repository', url: '/import' },
      { id: `repoDropdown_2`, name: 'New gist', url: '/gist' }
    ]
  },
  {
    id: `userLinks_2`,
    name: 'User',
    url: null,
    tips: 'View profile and more',
    items: {
     user: { id: `userDropdown_0`, name: 'liuxiao8114' },
     userItems: [
       { id: `items_0`, name: 'Your profile', url: '/profile'},
       { id: `items_1`, name: 'Your stars', url: '/stars' },
       { id: `items_2`, name: 'Explore', url: '/explore' }
     ],
     systemItems: [
       { id: `userDropdown_0`, name: 'Setting', url: '/settings' }
     ]
    }
  }
]

const TEST_USERNAME = 'xiao'

describe('Component Dropdown test cases', () => {
  it('should render userdropdown', () => {
    const props = {
      items: userDropdown.items,
      currentUsername: TEST_USERNAME,
      isDisplay: false
    }
    const instance = renderer.create(<Dropdown {...props}/>).root
    const rows = instance.children[0]

    expect(rows.props.className).toEqual("dropdown-menu-sw")
    expect(rows.children.length).toBe(7)
    expect(rows.children[0].props.className).toEqual("dropdown-header")
    expect(rows.children[0].findByProps(
      {className: 'css-truncate-target'}
    ).children).toEqual([ TEST_USERNAME ])
    expect(rows.children[1].props.className).toEqual(`dropdown-divider`)
  })

  it('should render ohter dropdown type ', () => {
    const props = {
      items: repoDropdown.items,
      currentUsername: TEST_USERNAME,
      isDisplay: true
    }
    const instance = renderer.create(<Dropdown {...props}/>).root
    const rows = instance.children[0]
//  console.log(renderer.create(<Dropdown {...props}/>).toJSON())
    expect(rows.props.className).toEqual("dropdown-sw-active")
    expect(rows.children.length).toBe(3)
    expect(() => rows.findByProps({className: 'css-truncate-target'})).toThrow()
//  expect(rows.findByProps({ to: '/new' }).children).toEqual(['New repository'])
  })
})
