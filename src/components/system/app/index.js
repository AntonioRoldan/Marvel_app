
import React, { Component } from 'react'
import {
  StatusBar, View
} from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { Home, CharacterDetail } from '../../pages'
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
            <Scene key={'Home'} component={Home} hideNavBar title={'Home'} />
            <Scene key={'CharacterDetail'}
              component={CharacterDetail}
              title={'Home'}
              navigationBarStyle={{ backgroundColor: 'red' }}
              titleStyle={{ color: 'white' }}
              backButtonTextStyle={{ color: 'white' }}
              backButtonTintColor={'white'}
              rightTitle={'Add'}
              onRight={() => Actions.push('CharactersAdd')}
              rightButtonTextStyle={{ color: 'white' }}
            />

          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
