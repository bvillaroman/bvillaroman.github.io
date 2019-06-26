import styled from 'styled-components';
import Link from "gatsby-link"
import Grid from '@material-ui/core/Grid';

export const NavbarLink = styled(Link)`
    color : black;
    text-decoration: none;
    font-size: 0.85rem;
    display: inline-block;
    font-family: -apple-system  Roboto, Helvetica Neue, sans-serif;
    &:active{
      text-decoration: underline;
      text-decoration-color:#FF9800;
      }
    &:hover{
      text-decoration: underline;
      text-decoration-color: #FF9800;
    }
    font-weight: 450;
    padding: 0.5rem;
`;

export const Logo = styled(NavbarLink)`
    color: #FF9800;
    font-size: 2rem;
    font-weight: bold;
`;

export const NavBarGrid = styled(Grid)`
    text-align: center;
`;

export const NavbarItem = styled(Grid)`
    padding: 0 !important;
`;
