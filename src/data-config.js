export const navLinks = [
  { id: `navLinks_0`, name: 'Pull requests', url: '/pulls' },
  { id: `navLinks_1`, name: 'Issues', url: '/issues' },
  { id: `navLinks_2`, name: 'Gist', url: '/gist' }
]

export const headerDropdowns = [
  {
    id: `userLinks_0`,
    name: 'Noti',
    url: '/notifications',
    tips: 'You have unread notifications'
  },
  {
    id: `userLinks_1`,
    name: 'Repo',
    url: null,
    tips: 'Create new...',
    items: {
      repository: [
        { id: `repoDropdown_0`, name: 'New repository', url: '/new' },
        { id: `repoDropdown_1`, name: 'Import repository', url: '/import' },
        { id: `repoDropdown_2`, name: 'New gist', url: '/gist' }
      ]
    }
  },
  {
    id: `userLinks_2`,
    name: 'User',
    url: null,
    tips: 'View profile and more',
    items: {
     user: { id: `userDropdown_0`, name: 'liuxiao8114' },
     userItems: [
       { id: `items_0`, name: 'Your profile', url: '/profile'},
       { id: `items_1`, name: 'Your stars', url: '/stars' },
       { id: `items_2`, name: 'Explore', url: '/explore' }
     ],
     systemItems: [
       { id: `userDropdown_0`, name: 'Setting', url: '/settings' }
     ]
    }
  }
]

export const languageColor = {
  javascript: '#f1e05a',
  java: '#b07219',
  'c++': '',
  'c': '',
  'css': '#563d7c',
  'go': '#375eab',
  'php': '#4F5D95',
  'ruby': '#701516',
  'typescript': '#2b7489'
}

export const searchResultTypeMappingComponent = {
  repositories: 'RepoItem',
  code: 'CodeItem',
  commits: 'CommitItem',
  issues: 'IssueItem',
  wikis: 'WikiItem',
  users: 'UserItem'
}

// used in ???
export const searchQueryMappingReducer = {
  repo: 'repoSearch',
  repositories: 'repoSearch',
  code: 'codeSearch',
  commits: 'commitSearch',
  issues: 'issueSearch',
  wikis: 'wikiSearch',
  users: 'userSearch'
}
