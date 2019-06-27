import styled from 'styled-components';
import Link from "gatsby-link"
import Grid from '@material-ui/core/Grid';

export const NavbarLink = styled(Link)`
    color : black;
    text-decoration: none;
    font-size: 0.85rem;
    display: inline-block;
    font-family: -apple-system  Roboto, Helvetica Neue, sans-serif;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #FF9800;
    }
    font-weight: 350;
    padding: 0.5rem;
    // margin: 0 5%;
`;

export const Logo = styled(NavbarLink)`
    color: #FF9800;
    font-size: 2rem;
    font-weight: bold;
    &:hover { text-decoration: none; }
    margin: 0 auto;

`;

export const NavBarGrid = styled(Grid)`
    // text-align: center;
`;

export const LogoItem = styled(Grid)`
    padding: 0 !important;
    text-align: center;
`;

export const LinksItem = styled(Grid)`
    padding: 0 !important;
    text-align: center;
`;
