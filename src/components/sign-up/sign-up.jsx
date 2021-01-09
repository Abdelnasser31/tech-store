import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      // this will clear the form input 
      this.setState = {
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
      }
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    const {displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'> 
        <h2 className='title'> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='display name'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange} 
            required
            />
          <FormInput 
            type='email'
            label='email'
            name='email'
            value={email}
            handleChange={this.handleChange} 
            required />

          <FormInput
            type='password'
            name='password'
            label='password'
            value={password}
            handleChange={this.handleChange} 
            required />

          <FormInput
            type='password'
            label='confirm password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange} required/>

          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    )
  }
}


export default SignUp