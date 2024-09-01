import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  scrollContainer: {
  },
  headerText1: {
    fontFamily: 'Roboto-Semibold',
    fontSize: PixelRatio.getFontScale() * 15,
  },
  headerText2: {
    fontFamily: 'Roboto-Semibold',
    color: 'white',
    fontSize: PixelRatio.getFontScale() * 19,
  },
  subscriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    padding: PixelRatio.getPixelSizeForLayoutSize(6),
    alignItems: 'center',
  },
  subscriptionTextCont: {
    width: '75%',
    justifyContent: 'center',
    gap: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  subscriptionText1: {
    fontFamily: 'Roboto-Bold',
    fontSize: PixelRatio.getFontScale() * 28,
    color: 'white',
  },
  subscriptionText2: {
    fontFamily: 'Roboto-Semibold',
    color: 'white',
    fontSize: PixelRatio.getFontScale() * 14,
  },
  subscriptionButton: {
    maxWidth: PixelRatio.getPixelSizeForLayoutSize(43),
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
    justifyContent: 'center',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  subscriptionImage: {
    position: 'absolute',
    right: PixelRatio.getPixelSizeForLayoutSize(-8),
    bottom: 0,
    width: PixelRatio.getPixelSizeForLayoutSize(50),
    height: PixelRatio.getPixelSizeForLayoutSize(50),
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  cardheaderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderText1: {
    fontFamily: 'Roboto-Bold',
    fontSize: PixelRatio.getFontScale() * 20,
    color: 'white',
  },
  cardHeaderText2: {
    fontFamily: 'Roboto-Semibold',
    fontSize: PixelRatio.getFontScale() * 15,
    color: 'rgba(0,160,255,1)',
  },
  cardheaderButtton: {},
});
