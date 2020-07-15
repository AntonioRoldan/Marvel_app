import axios from 'axios'
import { BASE_URL, PUBLIC_KEY, AUTH } from '../config/api'
import qs from 'qs'

const CHARACTERS_URL = '/v1/public/characters' + AUTH 
const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

export const getCharacters = () => {
  return instance.get(CHARACTERS_URL)
}

export const getCharacterDetails = (id) => {
  const CHARACTER_DETAILS_URL = '/v1/public/characters' + '/' + id + AUTH
  return instance.get(CHARACTER_DETAILS_URL)
}

export const getComicDetails = (url) => { 
  return instance.get(url)
}

