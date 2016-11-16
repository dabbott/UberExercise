import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import AssetMap from '../config/AssetMap'

export default class SearchResultsRow extends Component {

  static defaultProps = {
    icon: 'home',
    title: 'Home',
    subtitle: 'Earth'
  }

  render() {
    const {icon, title, subtitle} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={AssetMap[icon]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    height: 56,
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 25,
    justifyContent: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  textContainer: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  subtitle: {
    fontSize: 13,
    color: '#A4A4AC',
  },
})
