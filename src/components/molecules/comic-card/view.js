import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Card extends React.Component {

  componentDidMount() {
    const { resourceURI, name } = this.props.comic
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(character)}>
        <Image src={imageURI} style={styles.image} />
        <View>
          <Text style={styles.name}>{character.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.defaultProps = {
  onPress: () => {},
}

Card.propTypes = {
  comic: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Card;