import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import MapView from 'react-native-maps'

import {
  LocationButtonGroup,
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
} from '../components'

const mapStateToProps = (state) => ({
  recentLocations: state.recentLocations,
  shortcutLocations: state.recentLocations.slice(0, 3),
})

class Main extends Component {

  state = {
    searchResultsOpen: false,
    sourceText: 'Work',
    destinationText: '',
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const {latitude, longitude} = coords

        this.setState({
          position: {
            latitude,
            longitude,
          },
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        })
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }

  toggleSearchResults = () => {
    const {searchResultsOpen} = this.state

    this.setState({searchResultsOpen: !searchResultsOpen})
  }

  onSourceTextChange = (sourceText) => {
    this.setState({sourceText})
  }

  onDestinationTextChange = (destinationText) => {
    this.setState({destinationText})
  }

  render() {
    const {recentLocations, shortcutLocations} = this.props
    const {searchResultsOpen, sourceText, destinationText, region, position} = this.state

    return (
      <View style={styles.container}>
        <NavigationIcon
          icon={searchResultsOpen ? 'arrow-left' : 'hamburger'}
          onPress={this.toggleSearchResults}
        />
        <LocationSearchHeader
          onPress={this.toggleSearchResults}
          expanded={searchResultsOpen}
          sourceText={sourceText}
          destinationText={destinationText}
          onSourceTextChange={this.onSourceTextChange}
          onDestinationTextChange={this.onDestinationTextChange}
        />
        <LocationButtonGroup
          visible={!searchResultsOpen}
          locations={shortcutLocations}
        />
        <LocationSearchResults visible={searchResultsOpen}>
          <SearchResultsList list={recentLocations} />
        </LocationSearchResults>
        <MapView
          style={styles.map}
          region={region}
        >
          {position && (
            <MapView.Circle
              center={position}
              radius={300}
              strokeColor={'transparent'}
              fillColor={'rgba(112,185,213,0.30)'}
            />
          )}
          {position && (
            <MapView.Circle
              center={position}
              radius={100}
              strokeColor={'transparent'}
              fillColor={'#3594BC'}
            />
          )}
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  map: {
    flex: 1,
    zIndex: -1,
  }
})

export default connect(mapStateToProps)(Main)
