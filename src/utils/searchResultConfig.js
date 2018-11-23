import RepoItem from './RepoItem'
import UserItem from './UserItem'

export const SEARCH_RESULT_TYPES = ({
  repositories: {
    compeont: RepoItem,
    perPage: 10,
    language: true
  },
  code: {
    perPage: 10,
    language: true
  },
  commits: {
    perPage: 10,
    language: true
  },
  issues: {
    perPage: 10,
    language: false
  },
  wikis: {
    perPage: 10,
    language: false
  },
  users: {
    component: UserItem,
    perPage: 10,
    language: false
  }
})
