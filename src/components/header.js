import  {
  HFContainer,
  NavbarLink,
} from '../styles/header.js'
// import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <HFContainer>
    <NavbarLink to = "/">HOME</NavbarLink>
    <NavbarLink to = "/portraits/">PORTRAITS</NavbarLink>
    <NavbarLink to = "/shoots/">SHOOTS</NavbarLink>
    <NavbarLink to = "/about/">ABOUT</NavbarLink>
  </HFContainer>
)
export default Header
