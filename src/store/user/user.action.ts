import { User } from 'firebase/auth';
import { UserData, AdditionalInfo } from '../../utils/firebase/firebase.utils';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS } from './user.types';

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTIONS.SET_CURRENT_USER, user)
);

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTIONS.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTIONS.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTIONS.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTIONS.SIGN_IN_SUCCESS, user)
);

export const signInFailure = withMatcher(
  (error: Error): SignInFailure =>
    createAction(USER_ACTIONS.SIGN_IN_FAILURE, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTIONS.SIGN_UP_START, { email, password, displayName })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInfo): SignUpSuccess =>
    createAction(USER_ACTIONS.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailure = withMatcher(
  (error: Error): SignUpFailure =>
    createAction(USER_ACTIONS.SIGN_UP_FAILURE, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTIONS.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTIONS.SIGN_OUT_SUCCESS)
);

export const signOutFailure = withMatcher(
  (error: Error): SignOutFailure =>
    createAction(USER_ACTIONS.SIGN_OUT_FAILURE, error)
);

export type SignOutFailure = ActionWithPayload<
  USER_ACTIONS.SIGN_OUT_FAILURE,
  Error
>;

export type SignUpFailure = ActionWithPayload<
  USER_ACTIONS.SIGN_UP_FAILURE,
  Error
>;

export type SignInFailure = ActionWithPayload<
  USER_ACTIONS.SIGN_IN_FAILURE,
  Error
>;

export type SetCurrentUser = ActionWithPayload<
  USER_ACTIONS.SET_CURRENT_USER,
  UserData
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTIONS.SIGN_IN_SUCCESS,
  UserData
>;

export type CheckUserSession = Action<USER_ACTIONS.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTIONS.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTIONS.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTIONS.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTIONS.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInfo }
>;

export type SignOutStart = Action<USER_ACTIONS.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTIONS.SIGN_OUT_SUCCESS>;
