import * as types from './types'
import * as api from '../../api'
import { Alert } from 'react-native'

const setLoading = (loading) => {
  const action = { type: types.SET_LOADING,
    payload: { loading }
  }
  return action
}

export const setCharacter = (character) => {
  const action = {
    type: types.SET_CHARACTER,
    payload: { character }
  }
  return action
}

const setList = (list) => {
  const action = {
    type: types.SET_LIST,
    payload: { list }
  }
}

export const initList = () => {
  return (dispatch) => {
    dispatch(setList([]))
    dispatch(fetchList())
  }
}

export const fetchComic = (url) => {
  return async (dispatch, getState) => {
    const comic = await api.getComicDetails(url)
    
  }
}

export const postCharacter = (character) => {
  return async (dispatch, getState) => {
    var charactersList = getState().list
    charactersList.push(character)
    dispatch(setList(charactersList))
  }
}

export const fetchCharacter = (id) => {
  return async (dispatch, getState) => {
    dispatch(setCharacter(null))
    var { data: { results } } = await api.getCharacterDetails(id)
    dispatch(setCharacter(results[0])) // TODO: Test this
  }
}

const fetchList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const { data: { results } } = await api.getCharacters()
      console.log('data :', data)
      dispatch(setList(results))
    } catch (err) {
      Alert.alert('Error', err.message || 'Unknown error')
    } finally {
      dispatch(setLoading(false))
    }
  }
}
