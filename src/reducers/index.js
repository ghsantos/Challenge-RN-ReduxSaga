import { combineReducers } from 'redux';

const initialState = {
  books: [],
  book: {},
  page: 0,
  refreshing: false,
  loading: false,
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return { ...state, refreshing: true, page: 0 };

    case 'GET_NEXT_BOOKS':
      return { ...state, loading: true };

    case 'BOOKS_RECEIVED':
      return {
        ...state,
        books: [...action.books],
        refreshing: false,
        page: state.page + 1,
      };

    case 'NEXT_BOOKS_RECEIVED':
      return {
        ...state,
        books: [...state.books, ...action.books],
        loading: false,
        page: state.page + 1,
      };

    case 'SET_BOOK':
      return { ...state, book: { ...action.book } };

    default:
      return state;
  }
}

const appReducer = combineReducers({ booksReducer });

export default appReducer;
