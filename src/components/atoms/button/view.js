import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, ActivityIndicator } from 'react-native'
import styles from './styles'

class AddButton extends React.Component {
  render () {
    const { title, onPress } = this.props
    return (
      <Button style={styles.button}
        title={title}
        onPress={onPress} />
    )
  }
}

AddButton.defaultProps = {
  onPress: () => {}
}

AddButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
}

export default AddButton
