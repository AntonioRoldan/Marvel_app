import * as types from './types'

export const initialState = {
  loading: false,
  page: 0,
  total: 0,
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

    case types.SET_PAGE: {
      return { ...state, page: action.payload.page }
    }

    case types.SET_TOTAL: {
      return { ...state, total: action.payload.total }
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
