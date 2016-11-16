import React, { Component, PropTypes } from 'react'
import { StyleSheet, Dimensions, View, TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'

const transitionProps = ['top', 'left', 'height', 'width', 'shadowRadius']

export default class LocationSearchHeader extends Component {

  static defaultProps = {
    expanded: false,
    onPress: () => {},
  }

  render() {
    const {expanded, onPress, children} = this.props
    const {width: windowWidth} = Dimensions.get('window')
    const width = windowWidth - 24 * 2

    const style = {
      top: expanded ? 0 : 96,
      left: expanded ? 0 : 24,
      height: expanded ? 136 : 56,
      width: expanded ? windowWidth : width,
      shadowRadius: expanded ? 10 : 60,
    }

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animatable.View
          style={[styles.container, style]}
          transition={transitionProps}
        >
          {children}
        </Animatable.View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    zIndex: 1,
  },
})
