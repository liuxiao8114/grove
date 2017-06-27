const state = {
  entities: {
    users: {
      xiao: {
        login: 'xiao',
        avatarUrl: '',
        address: ''
      },
      Dan:{

      }
    },
    repos: {
      grove: {

      },
      webpack: {

      }
    },
    links: {
      navLinks: [

      ],
      userLinks: [

      ]
    },
    dropdowns: {
      headers: [
        { id: 1, name: '', items: {} },
        { id: 2, name: '', items: {} }
      ]
    }
  },

  pagination: {
    recentActions: {

    },
    searchRepos: {
      keyword: '',
      isFetching: false,
      posts: [],
      lastUpdated: ''
    }
  },
  selectedDropdown: null
}
