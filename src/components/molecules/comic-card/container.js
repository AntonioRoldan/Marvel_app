import { connect } from 'react-redux'
import View from './view'
import { charactersActions } from '../../../redux/characters'

const mapStateProps = (state) => {
  return {
    comic: state.characters.comic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComic: (url) => dispatch(charactersActions.fetchComic(url))
  }
}

export default connect(mapStateProps, mapDispatchToProps)(View)
