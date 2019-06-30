import React from 'react'
import {ContactContainer} from '../styles/containers.js'
import {EmailHighlight} from '../styles/components'
import Layout from "../components/layout"
import CheckoutForm from "../components/checkoutForm"
import SubNavBar from "../components/SubNavBar"
import {StripeProvider,Elements} from 'react-stripe-elements';

class Contact extends React.Component{
  state = {
    stripe: null,
    currentTab: 0,
  };

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

  switchSections = (currentTab) => { this.setState({currentTab}) }

  render() {
    const labels = ["Contact Information", "Invoice"];

    return (
      <StripeProvider stripe={this.state.stripe}>
        <Layout>
          <SubNavBar currentTab={this.state.currentTab} switchSections={this.switchSections} labels={labels}/>
            { 
              this.state.currentTab == 0 && (
              <ContactContainer>
                <h1>Have a business, idea or project in mind? <EmailHighlight >Email Me.</EmailHighlight></h1>
                <br/>
              </ContactContainer>
              )
            }
            { 
              this.state.currentTab == 1 && (
              <ContactContainer>
                <h3>Stripe</h3>
              </ContactContainer>
              )
            }
        </Layout>
      </StripeProvider>

    ) 
  }
}

export default Contact;
