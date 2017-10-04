import React from 'react'
import PropTypes from 'prop-types'
import  {
  HFContainer,
  NavbarLink,
  FooterItem
} from '../styles/HeaderStyles.js'
import  {Container} from '../styles/Container.js'
import Helmet from 'react-helmet'
import '../styles/globalStyle.js'
import './index.css'

const Header = () => (
    <HFContainer>
          <NavbarLink to = "/">HOME</NavbarLink>
          <NavbarLink to = "/Portraits/">PORTRAITS</NavbarLink>
          <NavbarLink to = "/Shoots/">SHOOTS</NavbarLink>
    </HFContainer>
)

const Footer = () => (
  <HFContainer>
    <FooterItem>ABRAHAM BRUCE VILLAROMAN</FooterItem>
    <FooterItem>BVILLAROMAN@GMAIL.COM</FooterItem>
    <FooterItem>631-871-9578</FooterItem>
  </HFContainer>
)

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="BVILLAROMAN"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
      {children()}
    <Footer />
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
