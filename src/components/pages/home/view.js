import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {CharacterCard} from '../../molecules';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash'
class Home extends React.Component {
  componentDidMount() {
    this.props.getCharacters()
  }

  onEndReached = ({distanceFromEnd}) => {
    const {charactersList, total, loading} = this.props;
    const listSize = _.size(charactersList);
    if (!loading && listSize > 0 && listSize < total) {
      this.props.fetchNextPage()
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      console.log('this.props.charactersList :', this.props.charactersList)
    }
  }

  onCharacterPress = (character) => {
    // We make transition to character detail screen here
    Actions.push('CharacterDetail', {title: character.name, id: character.id.toString()})
  }

  renderItem = ({item, index}) => (
    <CharacterCard character={item} onPress={this.onCharacterPress}></CharacterCard>
  )

  render() {
    const {charactersList, loading} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={charactersList}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={this.renderItem}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              colors={['white']}
              tintColor={'white'}
              refreshing={loading}
              onRefresh={this.props.getCharacters}
              title={'Loading'}
              titleColor={'white'}
            />
          }
        />
      </SafeAreaView>
    )
  }
}

Home.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  total: PropTypes.number,
  getCharacters: PropTypes.func,
  setSelectedCharacter: PropTypes.func,
}

export default Home;