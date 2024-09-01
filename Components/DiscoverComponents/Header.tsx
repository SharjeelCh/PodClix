import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/DiscoverStyles/Styles';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = (props: any) => {
 
  return (
    <View style={styles.headerContainer}>
      <EvilIcons
        name="microphone"
        color={'#ac3fff'}
        size={PixelRatio.getFontScale() * 27}
      />
      <View>
        <Text style={styles.headerText2}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Header;
