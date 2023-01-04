import { CATEGORY_ACTIONS } from './category.types';

const INITIAL_STATE = {
  categories: [],
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
