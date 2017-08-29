import { getAllArticles } from '../../services/articles';
import * as types from './actionTypes'

export function fetchAllArticles() {
  return async dispatch => {
    const articles = await getAllArticles();
    const articlesById = _.keyBy(articles
        .map(article => _.assignIn({ date: article.date.trim() }, article)),
        'id');

    dispatch({type: types.ARTICLES_FETCHED, articlesById})
  }
}
