import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS } from './category.types';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS, categories);

const fetchCategoriesFailure = (error) =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILURE, error);

// thunk action
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
