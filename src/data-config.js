export const navLinks = [
  { id: '', name: 'Pull requests', url: '/pulls', category: 'nav' },
  { id: '', name: 'Issues', url: '/issues' },
  { id: '', name: 'Gist', url: '/gist' }
]

export const userDropdown = [
  { id: '', category: 'username', name: 'liuxiao8114' },
  { id: '', category: 'userItems', name: 'Your profile', url: '/profile' },
  { id: '', category: 'userItems', name: 'Your stars', url: '/stars' },
  { id: '', category: 'userItems', name: 'Explore', url: '/explore' },
  { id: '', category: 'systemItems', name: 'Setting', url: '/setting' }
]

export const repoDropdown = [
  { id: '', category: 'repository', name: 'New repository', url: '/new' },
  { id: '', category: 'repository', name: 'Import repository', url: '/import' },
  { id: '', category: 'repository', name: 'New gist', url: '/gist' }
]

 export const userLinks = [
  { id: '', name: 'Noti', url: '/notifications', tips:'You have unread notifications', content: null },
  { id: '', name: 'Repo', url: null, tips:'Create new...', content: repoDropdown },
  { id: '', name: 'User', url: null, tips:'View profile and more', content: userDropdown }
]
