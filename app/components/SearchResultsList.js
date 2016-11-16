import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'

import SearchResultsRow from './SearchResultsRow'

// Row data (hard-coded)
const rows = [
  {id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco'},
  {id: 1, icon: 'recent', title: 'Zynga HQ', subtitle: '699 8th St, San Francisco'},
  {id: 2, icon: 'recent', title: 'Facebook HQ', subtitle: '888 Brannan St, San Francisco, CA'},
  {id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA'},
  {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
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
    const {title, subtitle, icon} = rowData

    return (
      <SearchResultsRow
        title={title}
        subtitle={subtitle}
        icon={icon}
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
