import React from 'react'
import  {
  HFContainer,
  NavbarLink,
  FooterItem,
  AboutContainer
} from '../styles/HeaderStyles.js'

class About extends React.Component{
  render(){
    return (
      <HFContainer>
        <AboutContainer>
          <FooterItem>ABRAHAM BRUCE VILLAROMAN</FooterItem>
          <FooterItem>BVILLAROMAN@GMAIL.COM</FooterItem>
          <FooterItem>631-871-9578</FooterItem>
        </AboutContainer>
      </HFContainer>
    )
  }
}
export default About;
