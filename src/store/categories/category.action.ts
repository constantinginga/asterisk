import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS, Category } from './category.types';

export type FetchCategoriesStart =
  Action<CATEGORY_ACTIONS.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailure = ActionWithPayload<
  CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILURE,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS, categories)
);

export const fetchCategoriesFailure = withMatcher(
  (error: Error): FetchCategoriesFailure =>
    createAction(CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILURE, error)
);
