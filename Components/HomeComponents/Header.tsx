import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import {Avatar} from 'react-native-paper';
import {Icon} from '@ant-design/react-native';
import Feather from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Avatar.Image
        size={35}
        source={require('../../assets/images/avatar.jpg')}
      />
      <View>
        <Text style={styles.headerText1}>Good Morning 👏</Text>
        <Text style={styles.headerText2}>Andrew Ainsley</Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <TouchableOpacity>
        <Feather
          name="notifications-none"
          size={PixelRatio.getPixelSizeForLayoutSize(7.5)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
