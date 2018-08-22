import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import NavLinks from '../../../src/containers/header/NavLinks'
import HeaderLink from '../../../src/components/header/HeaderLink'

describe('<NavLinks/>', () => {
  it('should only render itself when no link', () => {
    const wrapper = shallow(<NavLinks/>)
    expect(wrapper.find('ul').length).to.equal(1)
    expect(wrapper.find('ul').children().length).to.equal(0)
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
    const headerLinksWrapper = shallow(<NavLinks {...props}/>).find('ul').children()
    expect(headerLinksWrapper.length).to.equal(3)
  })
})
