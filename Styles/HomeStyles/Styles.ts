import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  scrollContainer: {flex: 1},
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
  subscriptionCardContainer: {
    borderBottomLeftRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    borderBottomRightRadius: PixelRatio.getPixelSizeForLayoutSize(10),

    gap: PixelRatio.getPixelSizeForLayoutSize(4.8),
  },
  subscriptionCard: {
    width: PixelRatio.getPixelSizeForLayoutSize(24.5),
    height: PixelRatio.getPixelSizeForLayoutSize(24.5),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  subscriptionCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  updateCardCont: {
    gap: PixelRatio.getPixelSizeForLayoutSize(6),
    backgroundColor: 'transparent',
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(4.8),
  },
  updateCard: {
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UpdateCardImage: {
    width: PixelRatio.getPixelSizeForLayoutSize(40),
    height: PixelRatio.getPixelSizeForLayoutSize(40),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  cardTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: PixelRatio.getFontScale() * 20,
    color: 'white',
  },
  innerTextWrap: {
    flexDirection: 'row',
    gap: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  cardButton: {
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(16),
    backgroundColor: '#9610ff',
    width: '50%',
    height: PixelRatio.getPixelSizeForLayoutSize(13),
    padding: 0,
    fontSize: PixelRatio.getFontScale() * 10,
  },
 
});
