// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  //auth,
  signInWithGooglePopup,
  //signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const LogIn = () => {
  // for logging in with redirect
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logInGoogleUser}>Log in with Google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Log in with Google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default LogIn;
