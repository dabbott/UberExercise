import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Sample from './Sample'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene key={'sample'} component={Sample} title={'Sample'} />
        </Scene>
      </Router>
    )
  }
}

export default connect()(AppRouter)
