import {PixelRatio, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  updateCard: {
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UpdateCardImage: {
    width: PixelRatio.getPixelSizeForLayoutSize(33),
    height: PixelRatio.getPixelSizeForLayoutSize(33),
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
  innerText: {
    fontSize: PixelRatio.getFontScale() * 15,
    fontFamily: 'Roboto-Medium',
  },

  shareButton: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: PixelRatio.getFontScale() * 8,
    alignItems: 'center',
    padding: PixelRatio.getFontScale() * 7,
    alignSelf: 'flex-start',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  shareText: {
    fontFamily: 'Roboto-semiBold',
    fontStyle: 'italic',
    elevation: 5,
  },
  mainTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: PixelRatio.getFontScale() * 26,
    color: 'white',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cardButton: {
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(16),
    backgroundColor: '#9610ff',
    alignSelf: 'flex-start',
    width: '30%',
    height: PixelRatio.getPixelSizeForLayoutSize(13),
    padding: 0,
    borderWidth: 0,
    fontSize: PixelRatio.getFontScale() * 10,
  },
  desc: {
    color: 'white',
    fontFamily: 'Roboto-semiBold',
    fontSize: PixelRatio.getFontScale() * 19,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    marginBottom: 20,
  },
  gridButtonContainer: {
    flexBasis: '25%',

    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 30,
    color: 'white',
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: 'white',
  },
});
