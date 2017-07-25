const state = {
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

      },
      webpack: {

      }
    }
  },

  currentUser: {
    username: '',
    password: '',
    error: null
  },

  pagination: {
    recentActions: {

    },
    reposSearch: {
      keyword: '',
      isFetching: false,
      ids: ['1', '2', '4'],
      lastUpdated: '',
      counts: 124123,
      pageCount: 0
    },
    issuesSearch: {

    },
    codeSearch: {

    },
    commitsSearch: {

    }
  },
  searchBar: {
    status: 'thisRepo',
    inputSearchValue: 'xiao'
  },
  selectedDropdown: null
}
