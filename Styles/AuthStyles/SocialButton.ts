import {PixelRatio, StyleSheet} from 'react-native';
import {height, width} from '../../Components/Dimensions';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: PixelRatio.getFontScale() * 15,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    gap: width * 0.03,
  },
  socialText: {
    color: 'white',
    fontFamily: 'Roboto',
  },
  dividerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.03,
    paddingHorizontal: 10,
  },
  dividerLine: {
    borderWidth: 0.6,
    flex: 1,
    borderColor: 'rgba(255,255,255,0.09)',
  },
  dividerText: {
    fontFamily: 'Roboto',
    color: 'white',
  },
  neonButtonCont: {
    width: '100%',
    backgroundColor: '#9610ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.023,
    borderRadius: 100,
    elevation: 10,
    shadowColor:'#9610ff',
    shadowOpacity:100,
    
  },
  neonText: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
});
