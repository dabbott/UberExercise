import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'

import SearchResultsRow from './SearchResultsRow'

// Row data (hard-coded)
const rows = [
  {id: 0, title: 'View'},
  {id: 1, title: 'Text'},
  {id: 2, title: 'Image'},
  {id: 3, title: 'ScrollView'},
  {id: 4, title: 'ListView'},
]

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export default class SearchResultsList extends Component {

  state = {
    dataSource: ds.cloneWithRows(rows)
  }

  renderSeparator = (sectionID, rowID) => {
    return (
      <View
        key={rowID}
        style={styles.separator}
      />
    )
  }

  renderRow = (rowData) => {
    return (
      <SearchResultsRow
        title={rowData.title}
        subtitle={rowData.title}
      />
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: '#EDEDED',
  }
})
