import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image, Text, FlatList } from 'react-native'
import styles from './styles'
import { ComicCard } from '../../molecules'

class CharacterDetail extends React.Component {
  componentDidMount () {
    this.props.getCharacter(this.props.id.toString())
  }

  renderItem = ({item: comic, index}) => {
    <ComicCard comic={comic}></ComicCard>
  }

  render () {
    const { thumbnail  } = this.props.character
    const imageURI = thumbnail.path + '.' + thumbnail.extension
    const { name, description, comics: { items } } = this.props.character
    // items: [{resourceURI: }]
    return (
      <SafeAreaView style={styles.container}>
        <Image src={imageURI} />
        <Text>{name}</Text>
        <Text>{description}</Text>
        <FlatList data={items}
          keyExtractor={(comic, index) => `${comic.name}`}
          renderItem={this.renderItem} />
      </SafeAreaView>
    )
  }
}

CharacterDetail.defaultProps = {

}

CharacterDetail.propTypes = {
  getCharacter: PropTypes.func,
  id: PropTypes.string
}

export default CharacterDetail
