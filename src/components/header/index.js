import React from 'react'
import Container from './Container'
import './Header.scss'

const Links = [
  { name: '', url: '', },
  {}
]

export default function Header() {
  return (
    <div className="header">
      <Container>
        <HeaderSearch></HeaderSearch>
        <HeaderLinksContainer>
          <NavLink>
            <HeaderLink></HeaderLink>
            <HeaderLink></HeaderLink>
            <HeaderLink></HeaderLink>
          </NavLink>
          <UserLink>
            <HeaderLink></HeaderLink>
            <HeaderLinkClick>
              <Dropdown>
                <DropdownItem></DropdownItem>
              </Dropdown>
            </HeaderLinkClick>
            <HeaderLinkClick>
              <Dropdown>
                <DropdownItem></DropdownItem>
              </Dropdown>
            </HeaderLinkClick>
          </UserLink>
        </HeaderLinksContainer>
      </Container>
    </div>
  )
}
