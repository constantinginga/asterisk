import { CATEGORY_ACTIONS } from './category.types';

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTIONS.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
      case CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
