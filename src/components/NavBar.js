import React from 'react'
import  { NavbarLink, Logo, LogoItem, LinksItem, NavBarGrid } from '../styles/NavBar.js'
import { NavBarContainer } from '../styles/containers'

export default () => {
  console.log()
  return (
    <NavBarContainer>
      <NavBarGrid 
        container 
        direction="row"
        justify="center"
        alignItems="center"
      >
        <LogoItem item md={3} xs={12}>
          <Logo to = "/">BVILLAROMAN</Logo>
        </LogoItem>
        <LogoItem item md={4} xs={0}>
        </LogoItem>
        <LinksItem item md={5} xs={12} >
          <NavbarLink 
            to="/photography"  
            activeStyle={{ 
              textDecoration: "underline",
              textDecorationColor: "#FF9800" 
            }}
          >
              PHOTOGRAPHY
          </NavbarLink>
          <NavbarLink 
            to="/projects"  
            activeStyle={{ 
              textDecoration: "underline",
              textDecorationColor: "#FF9800" 
            }}
          >
              PROJECTS
          </NavbarLink>
          <NavbarLink 
            to="/contact"  
            activeStyle={{ 
              textDecoration: "underline",
              textDecorationColor: "#FF9800" 
            }}
          >
              CONTACT
          </NavbarLink>
        </LinksItem>
      </NavBarGrid>
    </NavBarContainer>
  )
}
