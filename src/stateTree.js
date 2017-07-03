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
      navLinks: {
        '1': { id: '', name: 'Pull requests', url: '/pulls', category: 'nav' },
        '2': { id: '', name: 'Issues', url: '/issues' },
        '3': { id: '', name: 'Gist', url: '/gist' }
      },
      userLinks: [
        { id: '', name: 'Noti', url: '/notifications', tips: 'You have unread notifications', content: null },
        { id: '', name: 'Repo', url: null, tips: 'Create new...', content: 'repoDropdown' },
        { id: '', name: 'User', url: null, tips: 'View profile and more', content: 'userDropdown' }
      ]
    },
    dropdowns: {
      userDropdown: [
        { id: '', category: 'username', name: 'liuxiao8114' },
        { id: '', category: 'userItems', name: 'Your profile', url: '/profile' },
        { id: '', category: 'userItems', name: 'Your stars', url: '/stars' },
        { id: '', category: 'userItems', name: 'Explore', url: '/explore' },
        { id: '', category: 'systemItems', name: 'Setting', url: '/setting' }
      ]
    }
  },

  pagination: {
    recentActions: {

    },
    reposSearch: {
      keyword: '',
      isFetching: false,
      posts: ['1', '2', '4'],
      lastUpdated: '',
      counts: 124123,
      pageCount: 0
    },
    issuesSearch: {

    }
  },
  inputSearchValue: 'xiao',
  selectedDropdown: null
}
