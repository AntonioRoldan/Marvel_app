/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  StatusBar
} from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { Home, Splash, CharacterDetail } from '../../pages'
import store from '../../../config/redux'

class App extends Component {
  constructor (props) {
    super(props)
    StatusBar.setBarStyle('light-content', true)
  }
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene key={'Splash'} component={Splash} hideNavBar />
            <Scene key={'Home'} component={Home} hideNavBar title={'Home'} />
            <Scene key={'CharacterDetail'}
              component={CharacterDetail}
              hideNavBar
              title={'Home'}
              navigationBarStyle={{ backgroundColor: 'red' }}
              titleStyle={{ color: 'white' }}
              backButtonTextStyle={{ color: 'white' }}
              backButtonTintColor={'white'}
              rightTitle={'Add'}
              onRight={() => Actions.push('CharactersAdd')}
              rightButtonTextStyle={{ color: 'white' }}
            />

            // Create scene for the character detail view
            // Create scene for adding character
            // Create scene for comic detail
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
