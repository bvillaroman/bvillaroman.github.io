import styled from 'styled-components';
import {CardElement} from 'react-stripe-elements';


export const Card = styled(CardElement)`
  width: 500px;
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
  margin: 10px;
`

export const CardInputs = styled.input`
  width: ${props => props.width ? props.width : 'auto'};
  border: 1px solid;
  box-sizing: border-box;
  height: ${props => props.height ? props.height : '40px'};
  float: ${props => props.float ? props.float : 'none'};
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  margin: 10px;
`

export const SendAmount = styled.button`
  width: 100px;
  border: 1px solid;
  box-sizing: border-box;
  height: 40px;
  float: right;
  border: 1px solid transparent;
  border-radius: 4px;
  color: black;
  background-color: white;
  display: inline-block;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  vertical-align:top;
  margin: 10px;
`

export const FormContainer = styled.div`
  width: 66%;
  height: auto;
  margin: 0 auto;
`