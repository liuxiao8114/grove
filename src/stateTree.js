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
        name: 'grove',
        full_name: 'liuxiao/grove',
        owner: 'xiao',
        private: false,
        description: '',
        lastUpdated: '',
        languages:'JavaScript'
      },
      redux: {

      }
    },
    codes: {

    },
    commits: {

    }
  },

  currentStatus: {
    user: {
      username: '',
      password: '',
      error: null
    },
    searchType: {

    }
  },

  pagination: {
    recentActions: {

    },
    reposSearch: {
      keyword: '',
      isFetching: false,
      ids: ['1', '2', '4'],
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
  /*
  searchBar: {
    status: 'thisRepo',
    inputSearchValue: 'xiao'
  },
  */
  selectedDropdown: null
}
