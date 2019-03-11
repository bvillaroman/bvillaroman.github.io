import React from 'react';
import { injectStripe, PaymentRequestButtonElement} from 'react-stripe-elements';
import {Card,SendAmount,CardInputs,FormContainer} from '../styles/component'
import { graphql, StaticQuery } from "gatsby"

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      email:'',
      date:'',
      amount:'',
      description:'',
    }
    this.card = null;
  }
  

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  submit = (ev) => {
    // User clicked submit
    const {stripe} = this.props;
    console.log(stripe)
    // stripe.createToken().then((payload) => {
    //   console.log(payload)
    // })
    // const paymentRequest = props.stripe.paymentRequest({
    //   country: 'US',
    //   currency: 'usd',
    //   total: {
    //     label: 'Demo total',
    //     amount: 1000,
    //   },
    // });
  }

  render() {
    return (
      <div className="checkout">
        <p>Make a Payment</p>
        {/* <CardElement /> */}
        <FormContainer>
          <CardInputs placeholder={'email'} type='text' float={'left'} width='300px' name='email' value={this.state.email} onChange={this.handleInput}/>
          <CardInputs placeholder={'date'}  type='date' width='150px' name='date' value={this.state.date} onChange={this.handleInput}/>
          <CardInputs placeholder={'amount'} type='tel' float={'right'} width='100px' name='amount' value={this.state.amount} onChange={this.handleInput}/>
          <CardInputs placeholder={'description'}  type='text' width='600px' height='70px' name='description' value={this.state.description} onChange={this.handleInput}/>
          <Card ref={e => {this.card = e}}/>
          <SendAmount onClick={this.submit}>Send</SendAmount>
        </FormContainer>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);