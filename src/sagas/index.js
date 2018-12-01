import { put, takeEvery, all, select, call } from 'redux-saga/effects';

import { getPage } from './selectors';
import { getBooks } from '../api';

function* fetchBooks() {
  const res = yield call(getBooks, 0);

  yield put({ type: 'BOOKS_RECEIVED', books: res.items });
}

function* fetchNextBooks() {
  const page = yield select(getPage);

  const res = yield call(getBooks, page);

  yield put({ type: 'NEXT_BOOKS_RECEIVED', books: res.items });
}

function* actionGetBooks() {
  yield takeEvery('GET_BOOKS', fetchBooks);
}

function* actionGetNextBooks() {
  yield takeEvery('GET_NEXT_BOOKS', fetchNextBooks);
}

export default function* rootSaga() {
  yield all([actionGetBooks(), actionGetNextBooks()]);
}
