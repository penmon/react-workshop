import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome } from './components'
import { ArticlesIndex } from './containers'
import {me} from './store'

class Routes extends Component {

  render () {
    return (
      <Router history={history}>
        <Main>
          <Route path='/home' component={ArticlesIndex} />
        </Main>
      </Router>
    )
  }
}


export default Routes
