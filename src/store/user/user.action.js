import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS } from './user.types';

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTIONS.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTIONS.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTIONS.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTIONS.SIGN_IN_SUCCESS, user);

export const signInFailure = (error) =>
  createAction(USER_ACTIONS.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTIONS.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTIONS.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailure = (error) =>
  createAction(USER_ACTIONS.SIGN_UP_FAILURE, error);

export const signOutStart = () => createAction(USER_ACTIONS.SIGN_OUT_START);

export const signOutSuccess = () => createAction(USER_ACTIONS.SIGN_OUT_SUCCESS);

export const signOutFailure = (error) =>
  createAction(USER_ACTIONS.SIGN_OUT_FAILURE, error);
