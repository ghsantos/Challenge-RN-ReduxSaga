import { put, takeLatest, all } from 'redux-saga/effects';

import { getBooks } from '../api';

function* fetchBookes() {
  const books = yield getBooks();

  yield put({ type: 'BOOKS_RECEIVED', books });
}

function* actionWatcher() {
  yield takeLatest('GET_BOOKS', fetchBookes);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
