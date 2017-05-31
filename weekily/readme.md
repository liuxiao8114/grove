alert种类：
1. watch(Repo)
  issues_closed
  issues_comment
  issues_opened

2. follow(User)
  fork simple
  push

{
  todos: [
    { id: 1, text: '', complete: false },
    { id: 2, text: '', complete: false }
  ],
  visibilityFilter: 'SHOW_ALL'
}

{
  headerDropdowns: [
    { id: 1, name: 'userConfig', isDisplay: false },
    { id: 2, name: 'repository', isDisplay: false }
  ],
  headerSearch: {
    
  }
  // fetch header data
  // fetch body data
}

├──App
   ├──Header
      ├──HeaderSearch
      ├──HeaderLinksContainer
         ├──NavLinks
         ├──UserLinks

components
  NavLink
  NavLinkItem
  Dropdown
  DropdownItem

containers


Repository:
id
name
owner
type
description
public
