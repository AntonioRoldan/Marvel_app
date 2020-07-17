import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image, Text, FlatList } from 'react-native'
import styles from './styles'
import { ComicCard, HeaderCard } from '../../molecules'


class CharacterDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURI: '',
      name: '',
      description: '',
      comics: [],
      data: []
    }
  }
  async componentDidMount () {
    await this.props.getCharacter(this.props.id)
    const { thumbnail  } = this.props.character
    const imageURI = thumbnail.path + '.' + thumbnail.extension
    const { name, description, comics: { items } } = this.props.character
    const header = { imageURI, name, description }
    this.setState({ name, description, imageURI, data: [header, ...items] })
  }

  renderItem = ({item, index}) => {
    if(item.imageURI) {
      return (<HeaderCard header={item}></HeaderCard>)
    }
    return (<ComicCard comicItem={item}></ComicCard>)
  }

  render () {
   
    // items: [{resourceURI: }]
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={this.state.data}
          keyExtractor={(item, index) => `${item.name}`}
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
