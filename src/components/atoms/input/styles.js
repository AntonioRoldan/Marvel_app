import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  label: {
    marginLeft: 20,
    marginTop: 20,
    color: 'white',
    marginBottom: 10,
    fontSize: 17
  },
  input: {
    marginLeft: 20,
    paddingHorizontal: 20,
    width: '90%',
    color: 'blue',
    fontSize: 17,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 6
  }
})
