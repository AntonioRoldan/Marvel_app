import { connect } from 'react-redux'
import View from './view'
import { charactersActions } from '../../../redux/characters'

const mapStateProps = (state) => {
  return {
    character: state.characters.character
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (id) => dispatch(charactersActions.fetchCharacter(id))
  }
}

export default connect(mapStateProps, mapDispatchToProps)(View)
