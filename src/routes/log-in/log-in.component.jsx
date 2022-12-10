import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const LogIn = () => {
  const logInGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(response);
  };

  return (
    <div>
      <button onClick={logInGoogleUser}>Log in with Google</button>
    </div>
  );
};

export default LogIn;
