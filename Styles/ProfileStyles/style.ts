import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: PixelRatio.getPixelSizeForLayoutSize(6),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  scrollContainer: {flex: 1},
  headerText2: {
    fontFamily: 'Roboto-Semibold',
    fontSize: PixelRatio.getFontScale() * 16,
  },
  headerText1: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: PixelRatio.getFontScale() * 21,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#ac3fff',
    padding: PixelRatio.getPixelSizeForLayoutSize(1.6),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: PixelRatio.getFontScale() * 19,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  LCHeaderText: {
    fontSize: PixelRatio.getFontScale() * 23,
    fontFamily: 'Roboto-SemiBold',
    color: 'white',
  },
  formContainer: {
    width: '100%',
    flex: 1,
    height: '100%',
    borderWidth: 0,
    backgroundColor: 'transparent',
    gap: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  formItem: {
    backgroundColor: 'transparent',
    width: '100%',
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(2.6),
  },
  input: {
    backgroundColor: '#1e2026',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(3),
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(7),
    color: '#fff',
    borderWidth: 0,
    margin: 0,
  },
  button: {
    backgroundColor: '#8E44AD',
    borderRadius: 25,
    marginTop: 20,
    paddingVertical: 15,
  },
});
