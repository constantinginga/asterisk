import { takeLatest, put, all, call } from 'typed-redux-saga/macro';

import { User } from 'firebase/auth';

import { USER_ACTIONS } from './user.types';

import {
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
  signOutSuccess,
  signOutFailure,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  logInWithEmailAndPassword,
  logInWithGooglePopup,
  logOut,
  AdditionalInfo,
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* logIn({ payload: { email, password } }: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      logInWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* logInWithGoogle() {
  try {
    const { user } = yield* call(logInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}

export function* logInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* logOutUser() {
  try {
    yield* call(logOut);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailure(error as Error));
  }
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTIONS.EMAIL_SIGN_IN_START, logIn);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTIONS.GOOGLE_SIGN_IN_START, logInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTIONS.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, logInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTIONS.SIGN_OUT_START, logOutUser);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
