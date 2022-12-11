import { useState } from 'react';

import {
  logInWithGooglePopup,
  logInWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import Button from '../../components/button/button.component';
import FormInput from '../form-input/form-input.component';

import './log-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logInWithGoogle = async () => {
    const { user } = await logInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await logInWithEmailAndPassword(email, password);
      resetFormFields();
      console.log(result);
    } catch (error) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        alert('Wrong credentials. Please try again.');
      } else {
        console.log('error logging in user', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="log-in-container">
      <h2>I already have an account</h2>
      <span>Log in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          id="login-email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id="login-password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Log In</Button>
          <Button buttonType="google" onClick={logInWithGoogle}>
            Log In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
