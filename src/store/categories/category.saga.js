import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category.action';

import { CATEGORY_ACTIONS } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORY_ACTIONS.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
