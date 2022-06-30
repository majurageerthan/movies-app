import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    flex: 1,
  },

  textContainer: {
    flexDirection: 'row',
    flex: 1,
    maxHeight: 20,
    marginTop: 5,
    marginBottom: 7,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  subTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  ratingContainer: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 1,
  },

  ratingText: {
    fontSize: 12,
  },
  languageText: {
    paddingRight: 1,
  },

});
