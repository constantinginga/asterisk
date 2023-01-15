import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

import FormInput from '../form-input/form-input.component';

import { LogInContainer, ButtonsContainer } from './log-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          alert('Wrong credentials. Please try again.');
          break;
        default:
          console.log('error logging in user', error);
      }
    }
  };

  const handleLoginWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <LogInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Log In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleLoginWithGoogle}>
            Log In with Google
          </Button>
        </ButtonsContainer>
      </form>
    </LogInContainer>
  );
};

export default LogInForm;
