import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 15,
    maxHeight: 250,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  containerInnerFirst: {
    flex: 2,
    backgroundColor: 'white',
  },
  containerInnerSecond: {
    flex: 3,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  imgStyle: {
    height: '90%',
  },
});
