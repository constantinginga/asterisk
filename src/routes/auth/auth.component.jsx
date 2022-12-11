import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import LogInForm from '../../components/log-in-form/log-in-form.component';

import './auth.styles.scss';

const Auth = () => {
  return (
    <div className="auth-container">
      <LogInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
