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
  Description,
  Loading
} from '../styles/components'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt_email:'',
      date:'',
      name: '',
      amount:'',
      description:'',
      paymentStatus: '',
      isLoading: false
    }
    this.card = null;
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    const {date,receipt_email,name} = this.state
    const description = `${this.state.description} on date: ${date}`;
    const amount = this.state.amount * 100;
    let {token} = await this.props.stripe.createToken({name});

    this.setState({isLoading: true}, () => fetch(process.env.BACKEND_URL, {
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
      .then((res) => {
        this.setState({ paymentStatus: 'Sent!', isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ paymentStatus: 'Something went wrong, please email bvillaroman@gmail.com for support', isLoading: false });
      }))
    
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value, paymentStatus: ''})
  }

  render() {
    const { receipt_email, date, amount, name,isLoading,paymentStatus, description } = this.state;

    const isDisabled = name && amount && date && receipt_email ? false: true;

    
    return (
      <div className="checkout">
        <FormContainer>
          <FormRow>
            <Email placeholder={'Email'} type='text' name='receipt_email' value={receipt_email} onChange={this.handleInput}/>
            <Name  placeholder={'First, Last Name'} type='text' name='name' value={name} onChange={this.handleInput}/>
            <Date  placeholder={'Date'}  type='text' name='date'  value={date}  onChange={this.handleInput}/>
          </FormRow>

          <FormRow>
            <Description placeholder={'Invoice Description (optional)'}  type='text' name='description'  value={description}  onChange={this.handleInput}/>
          </FormRow>

          <FormRow>
            <Card ref={e => {this.card = e}}/>
            <Amount placeholder={'Amount'}  name='amount' value={amount} onChange={this.handleInput}/>
            <SendAmount onClick={this.submit} disabled={isDisabled}>Send</SendAmount>
          </FormRow>
          <FormRow>
            <SentText>
              { isLoading && <Loading /> }
              {paymentStatus}
            </SentText>
          </FormRow>
        </FormContainer>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);