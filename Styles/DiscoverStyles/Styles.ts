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
  headerText2: {
    fontFamily: 'Roboto-semiBold',
    color: 'white',
    fontSize: PixelRatio.getFontScale() * 25,
  },
  searchBar: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 19,
    color: 'white',
  },
  inputStyle: {color: 'white', fontFamily: 'Roboto-Regular'},
});
