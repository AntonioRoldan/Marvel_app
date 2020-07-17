import * as types from './types'
import * as api from '../../api'
import { Alert } from 'react-native'
import _ from 'lodash'

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
  return action
}

export const initList = () => {
  return (dispatch) => {
    dispatch(setList([]))
    dispatch(fetchList())
  }
}

export const fetchComic = (url) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setComic(null))
      var { data: { data: { results } } } = await api.getComicDetails(url)
      dispatch(setComic(results[0]))
    } catch (err) {
      console.log('Error :', err.message)
    }
  }
}

const setComic = (comic) => {
  const action = {
    type: types.SET_COMIC,
    payload: { comic }
  }
  return action
}

const setTotal = (total) => {
  const action = { type: types.SET_TOTAL, payload: { total } }
  return action
}

const setPage = (page) => {
  const action = { type: types.SET_PAGE, payload: { page } }
  return action
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
    try {
      dispatch(setCharacter(null))
      var { data: { data: { results } } } = await api.getCharacterDetails(id)
      dispatch(setCharacter(results[0])) // TODO: Test this
    } catch (err) {
      Alert.alert('Error', err.message || 'Unknown error')
    }
  }
}

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const { page, list, total } = getState().characters
    const listSize = _.size(list)
    if (listSize < total) {
      const newPage = page + 1
      dispatch(setPage(newPage))
      dispatch(fetchList())
    }
  }
}

const fetchList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const { list, page } = getState().characters
      const params = { 
        limit: 20,
        offset: 20 * page
      }
      const { data: { data } } = await api.getCharacters(params)
      const newList = [...list, ...data.results]
      dispatch(setTotal(data.total))
      dispatch(setList(newList))
    } catch (err) {
      Alert.alert('Error', err.message || 'Unknown error')
    } finally {
      dispatch(setLoading(false))
    }
  }
}
