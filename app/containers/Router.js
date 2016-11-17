import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Main from './Main'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene initial key={'main'} component={Main} title={'Main'} hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default connect()(AppRouter)
