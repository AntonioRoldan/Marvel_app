import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Card extends React.Component {

  render () {
    return (
      <View style={styles.container} >
        <Image source={{ uri: this.props.header.imageURI }} style={styles.image} />
        <View>
          <Text style={styles.name} >{this.props.header.name}</Text>
          <Text style={styles.description} >{this.props.header.description}</Text>
          <Text style={styles.comicsHeader} >Comics</Text>
        </View>
      </View>
    )
  }
}

Card.propTypes = {
  header: PropTypes.object.isRequired
}

export default Card
