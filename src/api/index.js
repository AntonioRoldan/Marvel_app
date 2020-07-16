import axios from 'axios'
import { BASE_URL, AUTH, AUTH_WITH_PARAMS } from '../config/api'

const CHARACTERS_URL = '/v1/public/characters' 
const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

export const getCharacters = (params) => {
  const PARAMS = '?limit=' + params.limit + '&offset=' + params.offset
  return instance.get(CHARACTERS_URL + PARAMS + AUTH_WITH_PARAMS)
}

export const getCharacterDetails = (id) => {
  const CHARACTER_DETAILS_URL = '/v1/public/characters' + '/' + id.toString() + AUTH
  return instance.get(CHARACTER_DETAILS_URL)
}

export const getComicDetails = (url) => { 
  url = url + AUTH
  return instance.get(url)
}
