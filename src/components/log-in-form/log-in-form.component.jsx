import { useState, useContext } from 'react';

import {
  logInWithGooglePopup,
  logInWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';

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

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logInWithGoogle = async () => {
    const { user } = await logInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await logInWithEmailAndPassword(email, password);
      resetFormFields();
      setCurrentUser(user);
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
          <Button type="button" buttonType="google" onClick={logInWithGoogle}>
            Log In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
