import styled from 'styled-components';
import Link from "gatsby-link"

export const HFContainer = styled.div`
    text-align : center;
    position: relative;
    margin: 0 auto;
    maxWidth : 100px;
    padding-bottom: 2px;
    font-weight: bold;

`;

export const NavbarLink = styled(Link)`
    color : black;
    text-decoration: none;
    font-size: 25px;
    display: inline-block;
    padding : 20px;
    &:active{
      text-decoration: line-through;
      text-decoration-color:#FD5B03;
      }
    &:hover{
      text-decoration: line-through;
      text-decoration-color: #FD5B03;
   }
    justify-content : 'center';
    align-tems: 'center'
`;

export const FooterItem = styled.div `
    max-width : 600px;
    color : #FD5B03;
    text-decoration: none;
    padding : 30px;
    margin: 0 auto;
`;

export const AboutContainer = styled.div`
    position: relative;
    top : 5vh;
    height : 80vh;
    font-weight: bold;
`;
