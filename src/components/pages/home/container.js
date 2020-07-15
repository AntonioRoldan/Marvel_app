import { connect } from 'react-redux'
import View from './view'
import { charactersActions } from '../../../redux/characters'

const mapStateProps = (state) => {
  return {
    charactersList: state.characters.list,
    loading: state.characters.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(charactersActions.initList()),
    setSelectedCharacter: (character) => dispatch(charactersActions.setCharacter(character))
  }
}

export default connect(mapStateProps, mapDispatchToProps)(View)
