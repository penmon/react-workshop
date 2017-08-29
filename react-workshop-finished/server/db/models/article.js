const Sequelize = require('sequelize')
const db = require('../db')

const Article = db.define('article', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT,
        defaultValue: function() {
            return "No Title";
        }
    },
    source: {
        type: Sequelize.TEXT
    },
    snippet: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.TEXT
    },
    link: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    keyword: {
        type: Sequelize.TEXT
    }
})

module.exports = Article;
