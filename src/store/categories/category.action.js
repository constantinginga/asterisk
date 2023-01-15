import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS } from './category.types';

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILURE, error);
