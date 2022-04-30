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
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: ${MainOrange};
`;
const NavLinks = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 350;
  padding: 0.5rem;
`;
const activeStyle = {
  color: MainOrange 
}
const LinksContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
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
