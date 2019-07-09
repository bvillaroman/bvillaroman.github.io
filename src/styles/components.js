import React from 'react';
import styled from 'styled-components';
import {CardElement} from 'react-stripe-elements';
import Link from "gatsby-link"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {  withStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-component'

// LANDING PAGE COMPONENTS

export const HeaderHighlight = styled(Link)`
  font-size: 2rem;
  font-weight: 350;
  color: #FF9800;
  text-decoration: none;
  @media(max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

// CONTACT PAGE COMPONENTS

export const EmailHighlight = styled.span`
  font-size: 3rem;
  font-weight: 350;
  color: #FF9800;
  text-decoration: none;
  @media(max-width: 768px) {
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const MyInput = styled.input`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;  
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  color: black!important;
  margin 10px auto;
`
export const Card = styled(CardElement)`
  width: 55%;
  border: 1px solid;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  float: left;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  display: inline-block;
  vertical-align:top;
  margin 10px auto;
`
export const Email = styled(MyInput)`
  width: 40%;
`
export const Date = styled(MyInput)`
  width: 15%;
`
export const Amount = styled(MyInput)`
  width: 12%;
`
export const SendAmount = styled.button`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;  
  width: 100px;
  border: 1px solid;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: rgb(253,91,2);
  color: white;
  display: inline-block;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  vertical-align:top;
  margin 10px auto;
  cursor: pointer;
  float: right;

  &:hover {
    box-shadow: 0 5px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
    transition: all 0.3s;
    transform: translateZ(10px);
  }
`
export const FormRow = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-around;
`
export const FormContainer = styled.div`
  width: 70%!important;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  background: #e8e8e8;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  color: black;
`
export const SentText = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;  
  width: 150px;
  height: 40px;
  color: black;
  display: inline-block;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  vertical-align:top;
  margin 10px auto;
  float: right;

`

// PROJECTS PAGE COMPONENTS

export const TitleContainer = styled.div`
    width: 100%;
    h1 {
      color: #000000;
      font-weight: 450;
    }
    p {

    }
`;

export const Divider = styled.div`
  width: 40%;
  border: 0.7px solid rgb(255, 152, 0);
`;

export const DetailsContainer = styled.div`
    width: 100%;
    margin: 10% auto;
    font-size: 0.8rem;
    font-weight: 350;
`;

export const ThumbnailContainer = styled.div`
    width: 60%;
    height: 100%;
    display: inline-block;
    // background: red;
`;

export const InfoContainer = styled.div`
    width: 40%;
    height: 100%;
    display: inline-block;
    
    // background: blue;
`;


// PHOTOGRAPHY PAGE COMPONENTS

export const GridContainer = styled(Masonry)`
    position: relative;
    padding-left: 0;
    display: table;
    width: 100%;
    margin: 0 auto;
    align: 'center';
`;

export const masonryOptions = {
    transitionDuration:'0.8s',
    isFitWidth : true
};

// NAV BAR

export const NavBarContainer = styled.div`
    width: 80%;
    height: 14% !important;
    margin: 0.5rem auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    // text-align: center;
`;


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

// Sub Nav Bar 

export const NavBarJS = withStyles({
  indicator: {
    display: 'flex',
    '& > div': {
      width: '100%',
      backgroundColor: '#FF9800',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export const NavBar = styled(NavBarJS)`
  && {
   width: 80%;
   margin: 0 auto;
  }
`;

export const Item = styled(Tab)`
  && {
    opacity: 1;
    margin: 0 auto;
    text-decoration: none;
    text-transform: none;
  }
`;


