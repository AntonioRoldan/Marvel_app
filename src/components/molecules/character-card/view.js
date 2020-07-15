import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {HouseCard} from '../../molecules';
import {Actions} from 'react-native-router-flux';

class Card extends React.Component {
  render() {
    const {character, onPress} = this.props;
    const {thumbnail: {path}, thumbnail: {extension}} = character
    const imageURI = character.thumbnail ? path + '.' + extension : '' // TODO: Add marvel placeholder
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(character)}>
        <Image src={imageURI} style={styles.image} />
        <View>
          <Text style={styles.name}>{character.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.defaultProps = {
  onPress: () => {},
};


Card.propTypes = {
  character: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Card;