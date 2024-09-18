import {PixelRatio, StyleSheet} from 'react-native';
import {height} from '../../Components/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
    backgroundColor: 'rgba(24,26,32,255)',
    gap: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  chevron: {
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  mainText: {
    color: 'white',
    fontSize: PixelRatio.getFontScale() * 45,
    fontFamily: 'Roboto-Medium',
  },
  buttonCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: height * 0.016,
  },
});
