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

  async componentDidMount () {
    const { resourceURI } = this.props.comicItem
    await this.props.getComic(resourceURI)
    const { title, description, thumbnail } = this.props.comic
    const { path, extension } = thumbnail
    const imageURI = path + '.' + extension
    this.setState({ 
      title, description, imageURI
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.state.imageURI }} style={styles.image} />
        <View>
          <Text style={styles.title} >{this.state.title}</Text>
          <Text style={styles.description} >{this.state.description}</Text>
        </View>
      </View>
    )
  }
}


Card.propTypes = {
  comic: PropTypes.object.isRequired
}

export default Card
