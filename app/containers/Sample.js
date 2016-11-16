import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

const mapStateToProps = (state) => ({
  item: state.sample.sampleItem,
})

class Sample extends Component {
  static propTypes = {
    item: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View/>
    )
  }
}

export default connect(mapStateToProps)(Sample)
