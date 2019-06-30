import React from 'react'
import  { NavbarLink, Logo, LinksContainer, LogoContainer } from '../styles/NavBar.js'
import { NavBarContainer } from '../styles/containers'

export default () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo 
          to = "/" 
          activeStyle={{ 
            color: "#FF9800" 
          }}
        >BVILLAROMAN</Logo>
      </LogoContainer>
      <LinksContainer>
        <NavbarLink 
          to="/photography"  
          activeStyle={{ 
            color: "#FF9800" 
          }}
        >
            PHOTOGRAPHY
        </NavbarLink>
        <NavbarLink 
          to="/projects"  
          activeStyle={{ 
            color: "#FF9800" 
          }}
        >
            PROJECTS
        </NavbarLink>
        <NavbarLink 
          to="/contact"  
          activeStyle={{ 
            color: "#FF9800" 
          }}
        >
            CONTACT
        </NavbarLink>
      </LinksContainer>     
    </NavBarContainer>
  )
}
