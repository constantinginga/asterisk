import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import LogInForm from '../../components/log-in-form/log-in-form.component';

import { AuthContainer } from './auth.styles';

const Auth = () => {
  return (
    <AuthContainer>
      <LogInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Auth;
