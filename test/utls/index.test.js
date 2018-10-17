import * as datas from '../../src/data-config'

describe('test datas', () => {
  it('navLinks ', () => {
    const { navLinks } = datas
    expect(Array.isArray(navLinks)).toBe(true)
    const item = navLinks[0]
    expect(Object.keys(item).length).toEqual(3)
  })
})
