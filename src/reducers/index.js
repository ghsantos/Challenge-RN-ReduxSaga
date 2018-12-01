import { combineReducers } from 'redux';

const initialState = {
  books: [],
  page: 0,
  refreshing: false,
  loading: false,
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'BOOKS_RECEIVED':
      return { ...state, books: [...action.books] };

    default:
      return state;
  }
}

const appReducer = combineReducers({ booksReducer });

export default appReducer;
