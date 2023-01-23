import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';

import {
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signInFailure,
  signUpFailure,
} from './user.action';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signInFailure.match(action) ||
    signOutFailure.match(action) ||
    signUpFailure.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
