import {
  useState,
  useEffect,
  useRef,
  useCallback,
  FormEvent,
  ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';

import {
  selectUserError,
  selectCurrentUser,
} from '../../store/user/user.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import FormInput from '../form-input/form-input.component';

import { LogInContainer, ButtonsContainer } from './log-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const isMounted = useRef(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const userError = useSelector(selectUserError);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetFormFields = useCallback(() => {
    setFormFields(defaultFormFields);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (currentUser) navigate('/');
      else if (userError) {
        switch ((userError as AuthError).code) {
          case AuthErrorCodes.USER_DELETED:
          case AuthErrorCodes.INVALID_PASSWORD:
            alert('Wrong credentials. Please try again.');
            break;
          case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
            alert('Too many attempts. Please try again later.');
            break;
          default:
            alert(`error logging in user: ${userError}`);
        }
      }
    } else isMounted.current = true;
  }, [userError, currentUser, navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
    resetFormFields();
  };

  const handleLoginWithGoogle = useCallback(() => {
    dispatch(googleSignInStart());
  }, [dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
