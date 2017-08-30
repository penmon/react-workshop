import './ArticlesIndex.scss'
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { ListView, ListRow } from '../components';
import { fetchAllArticles } from '../store/articles/actions';
import * as articlesSelectors from '../store/articles/reducer';


class ArticlesIndex extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    // if (!this.props.user) return this.renderLoading();
    return (
      <div className="ArticlesIndex">
        <section className="header-section container">
          <header className="row justify-content-center">
            <h1 className="col-md-6">
              <span>Ethereum</span><br/>
              <span>in mainstream media</span>
            </h1>
          </header>
        </section>
        <ListView
          rowsById={this.props.articlesById}
          rowsIdArray={this.props.articlesIdArray}
          renderRow={this.renderRow}
        />

      </div>
    )


  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderRow(articleId, article) {
    return (
      <ListRow
        className="row article-item"
        rowId={articleId}
        onClick
        selected>
        <div className="col-md-8 article-item--left">
          <h5>{article.title}</h5>
          <h6>{article.date}</h6>
        </div>
        <div className="col-md-4 article-item--right">
          <h6>{article.source}</h6>
        </div>
      </ListRow>
    )
  }
}

function mapStateToProps(state) {
  const [articlesById, articlesIdArray] = articlesSelectors.getArticles(state);
  return {
    articlesById,
    articlesIdArray
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loadArticles() {
      dispatch(fetchAllArticles())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesIndex)
