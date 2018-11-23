import RepoItem from './RepoItem'
import UserItem from './UserItem'

export const SEARCH_RESULT_TYPES = {
  repositories: {
    compeont: RepoItem,
    perPage: 10,
    isDisplayLanguageList: true
  },
  code: {
    perPage: 10,
    isDisplayLanguageList: true
  },
  commits: {
    perPage: 10,
    isDisplayLanguageList: true
  },
  issues: {
    perPage: 10,
    isDisplayLanguageList: false
  },
  wikis: {
    perPage: 10,
    isDisplayLanguageList: false
  },
  users: {
    component: UserItem,
    perPage: 10,
    isDisplayLanguageList: false
  }
}

function SortType(name, key, isAsc) {
  this.name = name
  this.key = key
  this.isAsc = isAsc || false
}

const sortType = new Set()

sortType.add(new SortType('best match', ''))
sortType.add(new SortType('most stars', 'star'))
sortType.add(new SortType('fewest stars', 'star', true))
sortType.add(new SortType('most forks', 'fork'))
sortType.add(new SortType('fewest forks', 'fork', true))
sortType.add(new SortType('recently updated', 'updated'))
sortType.add(new SortType('least recently updated', 'updated', true))

export { sortType }
