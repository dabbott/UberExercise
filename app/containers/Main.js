import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import {
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
} from '../components'

const mapStateToProps = (state) => ({

})

class Main extends Component {

  state = {
    searchResultsOpen: false,
    sourceText: 'Work',
    destinationText: '',
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
    const {searchResultsOpen, sourceText, destinationText} = this.state

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
        <LocationSearchResults
          visible={searchResultsOpen}
        >
          <SearchResultsList />
        </LocationSearchResults>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
})

export default connect(mapStateToProps)(Main)
