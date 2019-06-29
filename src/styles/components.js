import styled from 'styled-components';
import {CardElement} from 'react-stripe-elements';
import Link from "gatsby-link"

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
  @media(max-width: 582px) {
    font-size: 1.0rem;
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