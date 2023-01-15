import { takeLatest, put, all, call } from 'redux-saga/effects';

import { USER_ACTIONS } from './user.types';

import {
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
  signOutSuccess,
  signOutFailure,
} from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  logInWithEmailAndPassword,
  logInWithGooglePopup,
  logOut,
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* logIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(logInWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* logInWithGoogle() {
  try {
    const { user } = yield call(logInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* logInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* logOutUser() {
  try {
    yield call(logOut);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTIONS.EMAIL_SIGN_IN_START, logIn);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTIONS.GOOGLE_SIGN_IN_START, logInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, logInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS.SIGN_OUT_START, logOutUser);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
