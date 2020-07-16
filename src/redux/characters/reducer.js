import * as types from './types'

export const initialState = {
  loading: false,
  list: [],
  character: null,
  comic: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }

    case types.SET_COMIC:
      return { ...state, comic: action.payload.comic }
    case types.SET_LIST:
      return {
        ...state,
        list: action.payload.list
      }
    case types.SET_CHARACTER:
      return {
        ...state,
        character: action.payload.character
      }
    default:
      return state
  }
}

export default reducer
