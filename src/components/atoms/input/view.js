import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';

class Input extends React.Component {
  render() {
    const { value, onChangeText, placeholder, label } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
          value={value}
        />
      </View>
    )
  }
}

Input.defaultProps = {
  value: '',
  onChangeText: () => {},
  style: {}
};

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.any,
};

export default Input;
