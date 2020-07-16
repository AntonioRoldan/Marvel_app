import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image, View, Text, FlatList } from 'react-native'
import styles from './styles'
import { CharacterCard } from '../../molecules'
import { Actions } from 'react-native-router-flux'

class CharacterDetail extends React.Component {
  componentDidMount () {
    this.props.getCharacter(this.props.id.toString())
  }

  render () {
    const { thumbnail: { path }, thumbnail: { extension } } = this.props.character
    const imageURI = path + '.' + extension
    const { name, description, comics: { items } } = this.props.character
    // items: [{resourceURI: }]
    return (
      <SafeAreaView style={styles.container}>
        <Image src={imageURI} />
        <Text>{name}</Text>
        <Text>{description}</Text>
        // TODO: Add comics' flat list here as an add-on 
      </SafeAreaView>
    )
  }
}

CharacterDetail.propTypes = {
  getCharacter: PropTypes.func,
  id: PropTypes.string
}

export default CharacterDetail
