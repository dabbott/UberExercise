import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

import AssetMap from '../config/AssetMap'

export default class LocationButton extends Component {

  render() {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.12,
  },
  image: {
    width: 21,
    height: 21,
  }
})
