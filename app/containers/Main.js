import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { LocationSearchHeader, LocationSearchResults } from '../components'

const mapStateToProps = (state) => ({

})

class Main extends Component {

  state = {
    searchResultsOpen: false,
  }

  toggleSearchResults = () => {
    const {searchResultsOpen} = this.state

    this.setState({searchResultsOpen: !searchResultsOpen})
  }

  render() {
    const {searchResultsOpen} = this.state

    return (
      <View style={styles.container}>
        <LocationSearchHeader
          onPress={this.toggleSearchResults}
          expanded={searchResultsOpen}
        />
        <LocationSearchResults
          visible={searchResultsOpen}
        />
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
