import { connect } from 'react-redux'
import View from './view'
import { charactersActions } from '../../../redux/characters'

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (character) => dispatch(charactersActions.postCharacter(character))
  }
}

export default connect(null, mapDispatchToProps)(View)
