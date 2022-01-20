import {StyleSheet, Pressable} from 'react-native';
export default StyleSheet.create({
  footerContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  footerImage: {
    height: 75,
    width: 75,
    resizeMode: 'cover',
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightsalmon',
    paddingTop: 2,
    marginTop: 25,
  },
  storyImageSmall: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    position: 'absolute',
  },
  storyInnerContainer: {
    alignContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  storyContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  sectionTitleStory: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  sectionDescriptionStory: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  storyImage: {
    width: 700,
    height: 700,
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonWrapper: {
    marginTop: 200,
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: 'lightsalmon',
    padding: 5,
    paddingTop: 15,
    marginTop: 20,
    paddingBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
  },
});
