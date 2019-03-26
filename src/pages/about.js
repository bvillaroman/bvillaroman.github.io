import React from 'react'
import {Container,AboutContainer} from '../styles/containers.js'
import CheckoutForm from "../components/checkoutForm"
import {StripeProvider,Elements} from 'react-stripe-elements';

class About extends React.Component{
  constructor() {
    super();
    this.state = {stripe: null};
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe(process.env.STRIPE_API)});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe(process.env.STRIPE_API)});
      });
    }
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Container>
          <AboutContainer>
            <h3>ABRAHAM BRUCE VILLAROMAN</h3>
            <h3>BVILLAROMANBUSINESS@GMAIL.COM</h3>
            <h3>631-871-9578</h3>
            <Elements>
              <CheckoutForm />
            </Elements>
          </AboutContainer>
        </Container>
      </StripeProvider>

    ) 
  }
}

export default About;
