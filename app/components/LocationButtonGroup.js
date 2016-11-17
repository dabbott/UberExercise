import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

import LocationButton from './LocationButton'

const transitionProps = ['top']

export default class LocationButtonGroup extends Component {

  static defaultProps = {
    visible: true,
    locations: [],
    onPressLocation: () => {},
  }

  renderItem = (location, i) => {
    const {icon, title} = location
    const {onPressLocation} = this.props

    return (
      <View
        style={styles.item}
        key={i}
      >
        <LocationButton
          icon={icon}
          onPress={onPressLocation.bind(this, location)}
        />
        <View style={styles.itemSpacer} />
        <Text style={styles.itemText}>
          {title}
        </Text>
      </View>
    )
  }

  render() {
    const {locations, visible} = this.props
    const {height: windowHeight, width: windowWidth} = Dimensions.get('window')

    const containerStyle = {
      top: visible ? windowHeight - 160 : windowHeight + 30,
    }

    const gradientStyle = {
      width: windowWidth,
    }

    return (
      <Animatable.View
        style={[styles.container, containerStyle]}
        easing={'ease-in-out'}
        duration={300}
        transition={transitionProps}
      >
        <Image
          style={[styles.gradient, gradientStyle]}
          source={require('../images/bottom-gradient-overlay.png')}
        />
        {locations.map(this.renderItem)}
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  gradient: {
    position: 'absolute',
    left: -30,
    right: -30,
    top: -20,
    height: 180,
    width: 100,
    resizeMode: 'stretch',
  },
  item: {
    alignItems: 'center',
  },
  itemSpacer: {
    height: 19,
  },
  itemText: {
    backgroundColor: 'transparent',
    maxWidth: 74,
    textAlign: 'center',
  }
})
