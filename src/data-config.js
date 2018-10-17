const KEY_START_AT = 0

export const navLinks = (id => [
  { id: `navLinks_${id++}`, name: 'Pull requests', url: '/pulls', category: 'nav' },
  { id: `navLinks_${id++}`, name: 'Issues', url: '/issues' },
  { id: `navLinks_${id++}`, name: 'Gist', url: '/gist' }
](KEY_START_AT))

export const headerDropdowns = (id => ({
 natification: {
   id: `userLinks_${id++}`,
   name: 'Noti',
   url: '/notifications',
   tips: 'You have unread notifications'
 },

 repoDropdown: {
   id: `userLinks_${id++}`,
   name: 'Repo',
   url: null,
   tips: 'Create new...',
   items: (id => ({
     repository: [
       { id: `repoDropdown_${id++}`, name: 'New repository', url: '/new' },
       { id: `repoDropdown_${id++}`, name: 'Import repository', url: '/import' },
       { id: `repoDropdown_${id++}`, name: 'New gist', url: '/gist' }
     ]
   })(KEY_START_AT))
  },

  userDropdown: {
    id: `userLinks_${id++}`,
    name: 'User',
    url: null,
    tips: 'View profile and more',
    items: (id => ({
      user: { id: `userDropdown_${id++}`, name: 'liuxiao8114' },
      userItems: [
        { id: `userDropdown_${id++}`, name: 'Your profile', url: '/profile'},
        { id: `userDropdown_${id++}`, name: 'Your stars', url: '/stars' },
        { id: `userDropdown_${id++}`, name: 'Explore', url: '/explore' }
      ],
      systemItems: [
        { id: `userDropdown_${id++}`, name: 'Setting', url: '/settings' }
      ]
    })(KEY_START_AT))
  }
})(KEY_START_AT))

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
