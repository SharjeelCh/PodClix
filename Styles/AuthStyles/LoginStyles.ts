import {PixelRatio, StyleSheet} from 'react-native';
import {height, width} from '../../Components/Dimensions';

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
    fontSize: PixelRatio.getFontScale() * 38,
    fontFamily: 'Roboto-Medium',
  },
  inputMain: {
    width: '100%',
    gap: width * 0.04,
  },
  inputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: PixelRatio.getFontScale() * 15,
    gap: width * 0.03,
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.012,
  },
  rememberText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  iconButtonContainer:{
    flexDirection: 'row',
    gap: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCont:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(3.4),
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8.5),
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: PixelRatio.getFontScale() * 15,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  imageSize:{
    width: PixelRatio.getFontScale() * 30,
    height: PixelRatio.getFontScale() * 30,
  }
});
