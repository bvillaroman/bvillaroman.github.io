import * as React from "react"
import styled from "styled-components";
import { Link } from "gatsby"

const MainOrange = "#FF9800";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0px;
`;
const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  @media(max-width: 768px) {
  font-size: 1.5rem;
  }
`;
const NavLinks = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 350;
  padding: 0.5rem;
  @media(max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.1rem;
  }
`;
const activeStyle = {
  color: MainOrange
}
const LinksContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px) {
    width: 6rem;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Logo
        to="/"
        activeStyle={ activeStyle }
      >
        BVILLAROMAN
      </Logo>
      <LinksContainer>
      <NavLinks
	to="/projects"  
	activeStyle={ activeStyle }
      >
	Projects
      </NavLinks>
      <NavLinks
	to="/info"  
	activeStyle={ activeStyle }
      >
	Info
      </NavLinks>
      </LinksContainer>

    </Container>
  )
}

export default NavBar;
