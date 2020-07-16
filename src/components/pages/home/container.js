import { connect } from 'react-redux'
import View from './view'
import { charactersActions } from '../../../redux/characters'

const mapStateProps = (state) => {
  return {
    total: state.characters.total,
    charactersList: state.characters.list,
    loading: state.characters.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(charactersActions.initList()),
    setSelectedCharacter: (character) => dispatch(charactersActions.setCharacter(character)),
    fetchNextPage: () => dispatch(charactersActions.fetchNextPage())
  }
}

export default connect(mapStateProps, mapDispatchToProps)(View)
