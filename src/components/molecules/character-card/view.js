import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Card extends React.Component {
  render () {
    const { character, onPress } = this.props
    const { thumbnail } = character
    const imageURI = thumbnail.path + '.' + thumbnail.extension  // TODO: Add marvel placeholder
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(character)}>
        <Image source={{ uri: imageURI }} resizeMode='cover' style={styles.image} />
        <View>
          <Text style={styles.text}>{character.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Card.defaultProps = {
  onPress: () => {}
}

Card.propTypes = {
  character: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Card
