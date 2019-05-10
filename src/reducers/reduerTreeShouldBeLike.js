export const tree = {
  entities: {
    users: {
      xiao: {
        login: 'xiao',
        avatarUrl: '',
        publicEmail: '',
        emails: []
      },
      Dan:{

      }
    },
    repos: {
      grove: {
        name: 'grove',
        full_name: 'liuxiao/grove',
        owner: tree.entities.users.xiao,
        private: false,
        description: '',
        lastUpdated: '',
        languages:'JavaScript'
      },
      redux: {

      }
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

    },
    userOwnRepos: {
      keyword: tree.currentUser.username,
      isFetching: false,
      pageCount: 1,
      items: []
    }
  },
  currentUser: {
    username: '',
    password: '',
    activities: [
      {
        type: 'create',
        entity: 'repo'
      },
      {
        type: 'follow',
        entity: 'user'
      }
    ]
  },
  signUp: {

  },
  selectedDropdown: false
}
