import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Router from './containers/Router'

// This app doesn't use redux for anything currently,
// but feel free to expand the app to use real data.
const store = createStore(() => {})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
