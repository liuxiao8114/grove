let navId = 1, userId = 1
export const headerLinks =  {
  navLinks: [
    { id: 'navLinks_' + navId++, name: 'Pull requests', url: '/pulls', category: 'nav' },
    { id: 'navLinks_' + navId++, name: 'Issues', url: '/issues' },
    { id: 'navLinks_' + navId++, name: 'Gist', url: '/gist' }
  ],
  userLinks: [
    { id: 'userLinks_' + userId++, name: 'Noti', url: '/notifications', tips: 'You have unread notifications', dropdownId: null },
    { id: 'userLinks_' + userId++, name: 'Repo', url: null, tips: 'Create new...', dropdownId: 'repoDropdown' },
    { id: 'userLinks_' + userId++, name: 'User', url: null, tips: 'View profile and more', dropdownId: 'userDropdown' }
  ]
}

let udropdownID = 0, rDropdownId = 0

export const headerDropdowns =  {
 userDropdown: [
   { id: 'userDropdown_' + udropdownID++, category: 'username', name: 'liuxiao8114' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Your profile', url: '/profile' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Your stars', url: '/stars' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Explore', url: '/explore' },
   { id: 'userDropdown_' + udropdownID++, category: 'systemItems', name: 'Setting', url: '/settings' }
 ],
 repoDropdown: [
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'New repository', url: '/new' },
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'Import repository', url: '/import' },
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'New gist', url: '/gist' }
 ]
}

export const languageColor = {
  javascript: '#f1e05a',
  java: '',
  'c++': '',
  'c': ''
}
