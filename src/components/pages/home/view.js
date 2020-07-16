import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {CharacterCard} from '../../molecules';
import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
  componentDidMount() {
    this.props.getCharacters()
  }

  onCharacterPress = (character) => {
    // We make transition to character detail screen here 
    Actions.push('CharacterDetail', {title: character.name, id: character.id})
  }

  renderItem = ({item, index}) => (
    <CharacterCard character={item} onPress={onCharacterPress}></CharacterCard>
  )

  render() {
    const {charactersList, loading} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={charactersList}
          keyExtractor={(character, index) => `${character.id}`}
          renderItem={this.renderItem}
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
    );
  }
}

Home.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getCharacters: PropTypes.func,
  setSelectedCharacter: PropTypes.func,
};

export default Home;