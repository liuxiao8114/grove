import paginate from '../../src/reducers/paginate'

const TEST_ACTION_KEY = 'testActionKey',
      KEYWORD = 'xiao',
      TEST_TYPES = [ 'req', 'sus', 'fal' ],
      TEST_REQUEST_ACTION = {
        type: 'req',
        keyword: KEYWORD
      },
      TEST_SUCCESS_ACTION = {
        type: 'sus',
        keyword: KEYWORD,
        response: {
          entities: {
            users: { xiao: { login: 'xiao' } },
            repos: { lei: { full_name: 'lei' } }
          },
          result: {
            items: [ 'lei' ]
          }
        }
      }

function createReducer() {
  return paginate({
    mapActionToKey: TEST_ACTION_KEY,
    types: TEST_TYPES
  })
}

describe('paginate test cases', () => {
  it('should throw unexpected params', () => {
    expect(() => paginate({
      mapActionToKey: TEST_ACTION_KEY,
      types: [1, 2, 3, 4]
    })).toThrow()

    expect(() => paginate({
      mapActionToKey: () => {},
      types: [1, 2, 3]
    })).toThrow()
  })

  it('should return initial state when no paginate actions', () => {
    const reducer = createReducer()
    expect(Object.keys(reducer(undefined, {}))).toHaveLength(0)
  })

  it('should handle request action', () => {
    const reducer = createReducer()
    const result = reducer({}, TEST_REQUEST_ACTION)
    expect(result.keyword).toBe(KEYWORD)
    expect(result.isFetching).toBe(true)
  })

  it('should handle success action', () => {
    const reducer = createReducer()
    const result = reducer({}, TEST_SUCCESS_ACTION)
    expect(result.items[0]).toEqual('lei')
  })
})
