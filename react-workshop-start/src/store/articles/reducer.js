import * as types from './actionTypes';

const initialState = {
  articlesById: undefined,
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state,
        articlesById: action.articlesById
      };
    default:
      return state;
  }
}

export function getArticles(state) {
}
