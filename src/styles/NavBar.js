import styled from 'styled-components';
import Link from "gatsby-link"

export const NavbarLink = styled(Link)`
    color : black;
    text-decoration: none;
    font-size: 1rem;
    display: inline-block;
    font-family: -apple-system  Roboto, Helvetica Neue, sans-serif;
    &:hover {
      color: #FF9800;
    }
    font-weight: 350;
    padding: 0.5rem;
    // margin: 0 5%;
`;

export const Logo = styled(NavbarLink)`
    color: black;
    font-size: 2rem;
    font-weight: bold;
    &:hover { text-decoration: none; }
    margin: 0 auto;
    padding: 0.5rem 0;
`;


export const LinksContainer = styled.div`
    padding: 0 !important;
    width: 350px;
    display: inline-block;
    text-align: end;
    @media(max-width: 768px) {
      width: 100%;
      text-align: center;
    }
`;

export const LogoContainer = styled.div`
    width: 240px;
    display: inline-block;
    padding: 0 !important;
    @media(max-width: 768px) {
      width: 100%;
      text-align: center;
    }
`;