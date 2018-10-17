import React from 'react'
import renderer from 'react-test-renderer'
import NavLinks from '../../../src/components/header/NavLinks'

describe('<NavLinks/>', () => {
  it('should only render itself when no link', () => {
    const instance = renderer.create(<NavLinks links={ [] }/>).root
    expect(instance.findByProps({ className: 'header-nav' }).children.length).toEqual(0)
  })

  it('should render HeaderLink with key', () => {
    let navId = 0
    const props = {
      links: [
        { id: navId++, name: 'Pull requests', url: '/pulls', category: 'nav' },
        { id: navId++, name: 'Issues', url: '/issues' },
        { id: navId++, name: 'Gist', url: '/gist' }
      ]
    }
    const instance = renderer.create(<NavLinks { ...props}/>).root
    /*
    const headerLinksWrapper = instance.find('ul').children
    expect(headerLinksWrapper.length).toEqual(3)
    */
  })
})
