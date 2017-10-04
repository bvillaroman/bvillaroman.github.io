import styled from 'styled-components';
import Link from "gatsby-link"

export const HFContainer = styled.div`
    text-align : center;
    position: relative;
    margin: 3rem auto;
    maxWidth : 600;
    padding-bottom: 2px;
`;

export const NavbarLink = styled(Link)`
    color : black;
    text-decoration: none;
    font-size: 30px;
    display: inline-block;
    padding : 20px;

    &:active{ color : black;   }
    &:hover{ color : black;   }
`;

export const FooterItem = styled.div `
    color : black;
    text-decoration: none;
    display: inline-block;
    padding : 10px 20px 0px 20px;
`;
