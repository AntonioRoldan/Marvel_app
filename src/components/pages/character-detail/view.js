import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image, Text, FlatList } from 'react-native'
import styles from './styles'
import { ComicCard } from '../../molecules'

class CharacterDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURI: '',
      name: '',
      description: '',
      comics: []
    }
  }
  async componentDidMount () {
    await this.props.getCharacter(this.props.id)
    const { thumbnail  } = this.props.character
    const imageURI = thumbnail.path + '.' + thumbnail.extension
    const { name, description, comics: { items } } = this.props.character
    this.setState({ name, description, imageURI, comics: items })
  }

  renderItem = ({item, index}) => {
    <ComicCard comicItem={item}></ComicCard>
  }

  render () {
   
    // items: [{resourceURI: }]
    return (
      <SafeAreaView style={styles.container}>
        <Image source={{uri: this.state.imageURI}} style={styles.image} />
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.description}</Text>
        <FlatList data={this.state.comics}
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
