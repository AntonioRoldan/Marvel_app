import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Card extends React.Component {

  componentDidMount () {
    const { resourceURI } = this.props.comic
    console.log('resourceURI :', resourceURI)
    this.props.getComic(resourceURI)
  }

  render () {
    const { title, description, thumbnail } = this.props.comic
    const { path, extension } = thumbnail
    const imageURI = path + '.' + extension
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(character)}>
        <Image source={{uri: imageURI}} style={styles.image} />
        <View>
          <Text>{title}</Text>
          <Text>{description}</Text>
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

export default Card
