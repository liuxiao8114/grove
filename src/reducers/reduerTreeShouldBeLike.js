export const tree = {
  entities: {
    users: {

    },
    repos: {

    }
  },
  pagination: {
    userSearch: {
      keyword: 'xiao',
      isFetching: false,
      nextPageUrl: '',
      pageCount: 1,
      totalCount: 10,
      items: []
    },
    repoSearch: {

    }
  },
  currentUser: {
    username: '',
    password: '',
    userOwnRepos: {
      keyword: 'xiao',
      isFetching: false,
      pageCount: 1,
      items: [],
      filter: {
        key: 'gr',
        pageCount: 1,
        items: []
      }
    },
    activities: [
      {
        type: 'create',
        entity: 'repo'
      },
      {
        type: 'follow',
        entity: 'user'
      }
    ],
    isFetching: false
  },
  signUp: {

  },
  selectedDropdown: false
}
