import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      imageURL: ''
    }
  }

  componentDidMount () {
    const { resourceURI } = this.props.comicItem
    console.log('resourceURI :', resourceURI)
    this.props.getComic(resourceURI)
    const { title, description, thumbnail } = this.props.comic
    const { path, extension } = thumbnail
    const imageURI = path + '.' + extension
    this.setState({ 
      title, description, imageURI
    })
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(character)}>
        <Image source={{ uri: this.state.imageURI }} style={styles.image} />
        <View>
          <Text>{this.state.title}</Text>
          <Text>{this.state.description}</Text>
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
