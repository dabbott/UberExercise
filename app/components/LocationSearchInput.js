import React, { Component } from 'react'
import { AppRegistry, TextInput, StyleSheet } from 'react-native'

export default class LocationSearchInput extends Component {

  static defaultProps = {
    placeholder: null,
    onChangeText: () => {},
    onSubmitEditing: null
  }

  state = {
    text: '',
  }

  focus = () => this.refs.input.focus()

  onChangeText = (text) => {
    const {onChangeText} = this.props

    this.setState({text})
    onChangeText(text)
  }

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props
    const {text} = this.state

    if (text && onSubmitEditing) {
      onSubmitEditing(text)
      this.setState({text: ''})
    }
  }

  render() {
    const {onSubmitEditing, placeholder} = this.props
    const {text} = this.state

    return (
      <TextInput
        ref={'input'}
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: 'black',
    backgroundColor: 'transparent',
    zIndex: 10,
    fontSize: 15,
    paddingHorizontal: 10,
  },
})
