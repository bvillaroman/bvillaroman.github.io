import React from 'react'
import  {
  HFContainer,
  FooterItem,
  AboutContainer
} from '../styles/HeaderStyles.js'
// import {Elements, StripeProvider} from 'react-stripe-elements';
import {CardElement, injectStripe, Elements, StripeProvider} from 'react-stripe-elements';

const About = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_live_B5jY2Ocf9RcwPrpus0JXIKJh", {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_EfTeh2Bxd9LFHA", quantity: 1 }],
      successUrl: window.location.protocol + '//www.bvillaroman.com/success',
      cancelUrl: window.location.protocol + '//www.bvillaroman.com/canceled',
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render(){
    return (
      <HFContainer>
        <AboutContainer>
          <FooterItem>ABRAHAM BRUCE VILLAROMAN</FooterItem>
          <FooterItem>BVILLAROMAN@GMAIL.COM</FooterItem>
          <FooterItem>631-871-9578</FooterItem>
          <FooterItem>Payment: </FooterItem>
          <button onClick={event => this.redirectToCheckout(event)}> send invoice </button>
        </AboutContainer>
      </HFContainer>
    ) 
  }
}
  

export default About;
