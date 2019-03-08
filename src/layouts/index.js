import React from 'react'
import PropTypes from 'prop-types'
import  {
  HFContainer,
  NavbarLink,
} from '../styles/HeaderStyles.js'
import  {Container,Background} from '../styles/Container.js'
import Helmet from 'react-helmet'
import '../styles/globalStyle.js'
import './index.css'

const Header = () => (
    <HFContainer>
          <NavbarLink to = "/">HOME</NavbarLink>
          <NavbarLink to = "/Portraits/">PORTRAITS</NavbarLink>
          <NavbarLink to = "/Shoots/">SHOOTS</NavbarLink>
          <NavbarLink to = "/About/">ABOUT</NavbarLink>
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
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
