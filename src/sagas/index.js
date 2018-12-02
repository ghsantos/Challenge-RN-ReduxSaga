import { put, takeEvery, all, select, call } from 'redux-saga/effects';

import { getPage, getSearch } from './selectors';
import { getBooks } from '../api';

function* fetchBooks() {
  const search = yield select(getSearch);
  const res = yield call(getBooks, 0, search);

  if (res.items) {
    yield put({ type: 'BOOKS_RECEIVED', books: res.items });
  } else {
    yield put({ type: 'BOOKS_RECEIVED', books: [] });
  }
}

function* fetchNextBooks() {
  const page = yield select(getPage);
  const search = yield select(getSearch);

  const res = yield call(getBooks, page, search);

  if (res.items) {
    yield put({ type: 'NEXT_BOOKS_RECEIVED', books: res.items });
  } else {
    yield put({ type: 'NEXT_BOOKS_RECEIVED', books: [] });
  }
}

function* actionGetBooks() {
  yield takeEvery('GET_BOOKS', fetchBooks);
}

function* actionGetNextBooks() {
  yield takeEvery('GET_NEXT_BOOKS', fetchNextBooks);
}

function* actionSearchBooks() {
  yield takeEvery('SEARCH_BOOKS', fetchBooks);
}

export default function* rootSaga() {
  yield all([actionGetBooks(), actionGetNextBooks(), actionSearchBooks()]);
}
