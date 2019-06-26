import React from 'react'
import  { NavbarLink, Logo, NavbarItem, NavBarGrid } from '../styles/NavBar.js'
import { NavBarContainer } from '../styles/containers'

export default () => (
  <NavBarContainer spacing={3}>
    <NavBarGrid container>
      <NavbarItem item md={6} xs={12}>
        <Logo to = "/">BVILLAROMAN</Logo>
      </NavbarItem>
      <NavbarItem item md={6} xs={12}>
        <NavbarLink to = "/photography/">PHOTOGRAPHY</NavbarLink>
        <NavbarLink to = "/projects/">PROJECTS</NavbarLink>
        <NavbarLink to = "/contact/">CONTACT</NavbarLink>
      </NavbarItem>
    </NavBarGrid>
  </NavBarContainer>
)
