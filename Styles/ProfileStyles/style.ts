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
});
