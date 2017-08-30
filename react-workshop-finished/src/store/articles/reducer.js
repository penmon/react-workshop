import * as types from './actionTypes.js'

const initialState = {
  articlesById: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state,
        articlesById: action.articlesById
      }
    default:
      return initialState
  }
}

export function getArticles(state) {
  const articlesById = state.articles.articlesById;
  const articlesIdArray = _.keys(articlesById)
  return [articlesById, articlesIdArray];
}
