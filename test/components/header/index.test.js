import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../../../src/components/header'
import HeaderSearch from '../../../src/components/header/HeaderSearch.js'

const TEST_VALUE = 'test value'

describe('<Header/>', () => {
  it('should render itself with props and subcomponents', () => {
    const instance = renderer.create(
      <Header inputValue={TEST_VALUE} hasSearchBar={true}>
        children
      </Header>
    ).root
    expect(instance.findByType(HeaderSearch).props.inputValue).toBe(TEST_VALUE)
    expect(instance.findByType(HeaderSearch).props.inputValue).toBe(TEST_VALUE)
  })
})
