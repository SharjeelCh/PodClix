import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  StatusBar,
} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/ProfileStyles/style';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const LessCommonHeader = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor={'rgba(24,26,32,255)'} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <EvilIcons
          name="chevron-left"
          color={'white'}
          size={PixelRatio.getFontScale() * 39}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.LCHeaderText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default LessCommonHeader;
