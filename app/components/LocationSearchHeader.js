import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

const transitionProps = {
  hoverbar: ['top', 'left', 'height', 'width', 'shadowRadius'],
  square: ['top', 'left'],
  destinationBox: ['left', 'height', 'opacity'],
  sourceBox: ['top', 'opacity'],
  destinationText: ['top', 'left', 'fontSize', 'color', 'opacity'],
  sourceText: ['top', 'opacity'],
  verticalBar: ['top', 'left', 'opacity'],
  dot: ['top', 'left', 'opacity'],
}

const SQUARE_SIZE = 6

const AnimatableTouchable = Animatable.createAnimatableComponent(TouchableWithoutFeedback)

export default class LocationSearchHeader extends Component {

  static defaultProps = {
    expanded: false,
    onPress: () => {},
    onSourceTextChange: () => {},
    onDestinationTextChange: () => {},
    sourceText: '',
    destinationText: '',
  }

  onSourceTextChange = (sourceText) => {
    const {onSourceTextChange} = this.props

    this.setState({sourceText})
    onSourceTextChange(sourceText)
  }

  onDestinationTextChange = (destinationText) => {
    const {onDestinationTextChange} = this.props

    onDestinationTextChange(destinationText)
  }

  onExpand = () => {
    const {onPress} = this.props

    onPress()

    setTimeout(() => {
      if (!this.refs.destinationInput) return

      this.refs.destinationInput.focus()
    }, 350)
  }

  getAnimatableStyles = () => {
    const {expanded, destinationText} = this.props
    const {width: windowWidth} = Dimensions.get('window')
    const width = windowWidth - 24 * 2

    return {
      hoverbar: {
        top: expanded ? 0 : 96,
        left: expanded ? 0 : 24,
        height: expanded ? 136 : 56,
        width: expanded ? windowWidth : width,
        shadowRadius: expanded ? 10 / 2 : 60 / 2,
      },
      square: {
        top: expanded ? 109 : 96 + 56 / 2 - SQUARE_SIZE / 2,
        left: expanded ? 29 : 24 + 22,
      },
      destinationBox: {
        left: expanded ? 56 : 24,
        right: 24,
        top: 96,
        height: expanded ? 32 : 56,
        opacity: expanded ? 1 : 0,
      },
      destinationText: {
        left: expanded ? 65 : 75,
        top: expanded ? 103 : 112,
        fontSize: expanded ? 15 : 20,
        color: expanded ? '#A4A4AC' : '#525760',
        opacity: (expanded && destinationText.length !== 0) ? 0 : 1,
      },
      sourceBox: {
        left: 56,
        right: 24,
        height: 32,
        top: expanded ? 56 : 96,
        opacity: expanded ? 1 : 0,
      },
      sourceText: {
        left: 65,
        top: expanded ? 64 : 76,
        opacity: expanded ? 1 : 0,
      },
      verticalBar: {
        top: expanded ? 78 : 78 + 22 - 5,
        left: expanded ? 32 : 32 + 22 - 5,
        opacity: expanded ? 1 : 0,
      },
      dot: {
        top: expanded ? 69 : 69 + 22 - 5,
        left: expanded ? 29.5 : 29.5 + 22 - 5,
        opacity: expanded ? 1 : 0,
      },
    }
  }

  render() {
    const {expanded, sourceText, destinationText} = this.props
    const animatableStyles = this.getAnimatableStyles()

    return (
      <View style={styles.container}>
        <Animatable.View
          style={[styles.square, animatableStyles.square]}
          transition={transitionProps.square}
        />
        <Animatable.Text
          style={[styles.sourceText, animatableStyles.sourceText]}
          transition={transitionProps.sourceText}
          pointerEvents={'none'}
        >
          {sourceText}
        </Animatable.Text>
        <Animatable.Text
          style={[styles.destinationText, animatableStyles.destinationText]}
          transition={transitionProps.destinationText}
          pointerEvents={'none'}
        >
          {destinationText.length === 0 ? 'Where to?' : destinationText}
        </Animatable.Text>
        <Animatable.View
          style={[styles.destinationBox, animatableStyles.destinationBox]}
          transition={transitionProps.destinationBox}
          pointerEvents={'box-none'}
        >
          {expanded && (
            <TextInput
              ref={'destinationInput'}
              style={styles.input}
              value={destinationText}
              onChangeText={this.onDestinationTextChange}
            />
          )}
        </Animatable.View>
        <Animatable.View
          style={[styles.sourceBox, animatableStyles.sourceBox]}
          transition={transitionProps.sourceBox}
          pointerEvents={'none'}
        />
        <Animatable.View
          style={[styles.verticalBar, animatableStyles.verticalBar]}
          transition={transitionProps.verticalBar}
          pointerEvents={'none'}
        />
        <Animatable.View
          style={[styles.dot, animatableStyles.dot]}
          transition={transitionProps.dot}
          pointerEvents={'none'}
        />
        <Animatable.View
          style={[styles.hoverbar, animatableStyles.hoverbar]}
          transition={transitionProps.hoverbar}
        >
          <TouchableOpacity
            style={styles.target}
            onPress={expanded ? null : this.onExpand}
          />
        </Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  hoverbar: {
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    zIndex: 1,
  },
  target: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    backgroundColor: 'black',
    zIndex: 2,
  },
  dot: {
    position: 'absolute',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: SQUARE_SIZE / 2,
    backgroundColor: '#A4A4AC',
    zIndex: 2,
  },
  destinationBox: {
    position: 'absolute',
    backgroundColor: '#EDEDED',
    borderRadius: 4,
    zIndex: 3,
  },
  destinationText: {
    position: 'absolute',
    zIndex: 4,
    backgroundColor: 'transparent',
  },
  sourceText: {
    position: 'absolute',
    zIndex: 4,
    color: '#525760',
    backgroundColor: 'transparent',
  },
  sourceBox: {
    position: 'absolute',
    backgroundColor: '#F9F9F9',
    borderRadius: 4,
    zIndex: 3,
  },
  verticalBar: {
    position: 'absolute',
    height: 28,
    width: 1,
    backgroundColor: '#A4A4AC',
    zIndex: 2,
  },
  input: {
    flex: 1,
    color: 'black',
    backgroundColor: 'transparent',
    zIndex: 10,
    fontSize: 15,
    paddingHorizontal: 10,
  },
})
