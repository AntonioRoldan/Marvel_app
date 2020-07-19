import React from 'react'
import { AddButton, Input } from '../../atoms'
import { SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker'
import {IMAGE_OPTIONS} from '../../../config/images'
import styles from './styles'

class CharactersAdd extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      image: null
    }
  }

  onSelectImage = () => {
    ImagePicker.showImagePicker(IMAGE_OPTIONS, (response) => {
      if (response.uri) {
        this.setState({image: response})
      }
    })
  }

  onSubmit = () => {
    this.props.addCharacter({id: this.state.name, name: this.state.name, description: this.state.description, image: this.state.image})
    Actions.pop()
  }
  render () {
   
    // items: [{resourceURI: }]
    return (
      <SafeAreaView style={styles.container}>
      <TouchableOpacity
      onPress={this.onSelectImage}
      style={styles.imageContainer}>
      <Image 
      source={this.state.image ? this.state.image : ''} 
      style={styles.imageBackground} 
      />

      </TouchableOpacity>
        <Input 
        label={'Name'}
        value={this.state.name}
        onChangeText={(name ) => this.setState({ name })}
        placeholder={'Name your character'}>
        </Input>
        <Input 
        label={'Description'}
        value={this.state.description}
        onChangeText={(description) => this.setState({ description })}
        placeholder={'Name your character'}>
        </Input>
        <AddButton 
        title={'Add'}
        onPress={() => this.onSubmit()}>
        </AddButton>
      </SafeAreaView>
    )
  }
}

export default CharactersAdd
