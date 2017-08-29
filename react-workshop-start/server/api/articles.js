const router = require('express').Router()
const { Article } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Article.findAll({
      attributes: ['id', 'title', 'source', 'link', 'date', 'type']
    })
    .then(articles => {
      res.send(articles)
      return articles
    })
    .catch(next)
})
