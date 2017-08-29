import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  articlesById: undefined,
})

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return state.merge({
        articlesById: action.articlesById
      });
    default:
      return state;
  }
}

export function getArticles(state) {
}
