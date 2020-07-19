
import React, { Component } from 'react'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { Home, CharacterDetail, CharactersAdd } from '../../pages'
import store from '../../../config/redux'

class App extends Component {


  render () {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene key={'Home'}
              navigationBarStyle={{ backgroundColor: 'red' }}
              titleStyle={{ color: 'white' }}
              backButtonTextStyle={{ color: 'white' }}
              backButtonTintColor={'white'}
              rightTitle={'Add'}
              onRight={() => Actions.push('CharactersAdd')}
              rightButtonTextStyle={{ color: 'white' }}
              component={Home} title={'Home'} />
            <Scene key={'CharacterDetail'}
              component={CharacterDetail}
              navigationBarStyle={{ backgroundColor: 'red' }}
              titleStyle={{ color: 'white' }}
              backButtonTextStyle={{ color: 'white' }}
              backButtonTintColor={'white'}
            />
            <Scene key={'CharactersAdd'} component={CharactersAdd} title={'Add character'} />

          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
