import React from 'react'
import  {
  HFContainer,
  NavbarLink,
} from '../styles/header.js'

export default () => (
  <HFContainer>
    <NavbarLink to = "/">HOME</NavbarLink>
    <NavbarLink to = "/portraits/">PORTRAITS</NavbarLink>
    <NavbarLink to = "/shoots/">SHOOTS</NavbarLink>
    <NavbarLink to = "/about/">ABOUT</NavbarLink>
  </HFContainer>
)
