import React, { Component, PropTypes } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const ICON_MAP = {
  hamburger: require('../images/icon-hamburger.png'),
  ['arrow-left']: require('../images/icon-arrow-left.png'),
}

const hitSlop = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
}

export default class NavigationIcon extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
  }

  static defaultProps = {
    onPress: () => {}
  }

  render() {
    const {onPress, icon} = this.props

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        hitSlop={hitSlop}
      >
        <Image
          style={styles.icon}
          source={ICON_MAP[icon]}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 36,
    left: 22,
    zIndex: 10,
  },
  icon: {
    width: 21,
    height: 21,
  },
})
