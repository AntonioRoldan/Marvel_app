import md5 from 'react-native-md5'
export const PUBLIC_KEY = '5fd2ab242d500eba712b3d18235a0187'
export const PRIVATE_KEY = 'cc1417e1760906fe9d281ff6f1eb12e913daebba'
export const BASE_URL = 'https://gateway.marvel.com:443'
var ts = new Date().getTime().toString()
var hash = md5.hex_md5(ts + PRIVATE_KEY + PUBLIC_KEY)
export const AUTH = '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash
