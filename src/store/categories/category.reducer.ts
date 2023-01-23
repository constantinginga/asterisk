import { AnyAction } from 'redux';

import { Category } from './category.types';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category.action';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    };
  }

  if (fetchCategoriesFailure.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
  // switch (action.type) {
  //   case CATEGORY_ACTIONS.FETCH_CATEGORIES_START:
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   case CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS:
  //     return {
  //       ...state,
  //       categories: action.payload,
  //       isLoading: false,
  //     };
  //   case CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILURE:
  //     return {
  //       ...state,
  //       isLoading: false,
  //       error: action.payload,
  //     };
  //   default:
  //     return state;
  // }
};
