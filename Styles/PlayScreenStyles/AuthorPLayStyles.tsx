import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  subscribeContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  SubscribeBUttonUn: {
    flexDirection: 'row',
    gap: PixelRatio.getFontScale() * 8,
    flexWrap: 'wrap',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: PixelRatio.getFontScale() * 30,
    backgroundColor: '#9610ff',
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(2.5),
  },
  SubscribeBUttonYes: {
    flexDirection: 'row',
    gap: PixelRatio.getFontScale() * 8,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    borderRadius: PixelRatio.getFontScale() * 30,
    backgroundColor: 'transparent',
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(2.5),
  },
  subscribeText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  allHeader:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between'
  }
});
