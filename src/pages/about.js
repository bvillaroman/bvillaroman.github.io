import React from 'react'
import {Container,AboutContainer} from '../styles/containers.js'
import CheckoutForm from "../components/checkoutForm"
import {StripeProvider,Elements} from 'react-stripe-elements';

export default (props) => {
  return (
    <StripeProvider apiKey={process.env.STRIPE_API}>
      <Container>
        <AboutContainer>
          <h3>ABRAHAM BRUCE VILLAROMAN</h3>
          <h3>BVILLAROMAN@GMAIL.COM</h3>
          <h3>631-871-9578</h3>
          <Elements>
            <CheckoutForm />
          </Elements>
        </AboutContainer>
      </Container>
    </StripeProvider>
  ) 
}

