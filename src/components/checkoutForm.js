import React from 'react';
import { injectStripe} from 'react-stripe-elements';
import {
  Card,
  SendAmount,
  Email,
  Date,
  Amount,
  FormContainer,
  FormRow,
  SentText,
  Name,
  Description
} from '../styles/components'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      receipt_email:'',
      date:'',
      name: '',
      amount:'',
      description:'',
      disabled: false,
      paymentSent: false
    }
    this.card = null;
  }
  
  resetButton() {
    this.setState({ disabled: false})
  }

  async submit(ev) {
    const {date,receipt_email,name} = this.state
    const description = `${this.state.description} on date: ${date}`
    const amount = this.state.amount * 100;
    let {token} = await this.props.stripe.createToken({name});
    let response = await fetch("https://ugi3nmc0e1.execute-api.us-east-1.amazonaws.com/dev/checkout", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),      
      body: JSON.stringify({
        token,
        amount,
        description, 
        receipt_email
      })
    })
    if(response.ok){ 
      this.resetButton()
      this.setState({ paymentSent: true })
    }
    else {
      console.error("Error")
      this.setState({ paymentSent: false })
    };
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value, paymentSent: false})
  }

  render() {
    
    return (
      <div className="checkout">
        <FormContainer>
          <FormRow>
            <Email placeholder={'Email'} type='text' name='receipt_email' value={this.state.receipt_email} onChange={this.handleInput}/>
            <Name  placeholder={'First, Last Name'} type='text' name='name' value={this.state.name} onChange={this.handleInput}/>
            <Date  placeholder={'Date'}  type='text' name='date'  value={this.state.date}  onChange={this.handleInput}/>
          </FormRow>

          <FormRow>
            <Description placeholder={'Invoice Description (optional)'}  type='text' name='description'  value={this.state.description}  onChange={this.handleInput}/>
          </FormRow>

          <FormRow>
            <Card ref={e => {this.card = e}}/>
            <Amount placeholder={'Amount'}  name='amount' value={this.state.amount} onChange={this.handleInput}/>
            <SendAmount onClick={this.submit} disabled={this.state.disabled}>Send</SendAmount>
          </FormRow>
          { 
            this.state.paymentSent && 
              <FormRow>
                <SentText>Money Sent!</SentText>
              </FormRow>
            }
        </FormContainer>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);