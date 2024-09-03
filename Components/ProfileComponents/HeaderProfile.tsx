import {View, Text, PixelRatio, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/ProfileStyles/style';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderProfile = (props: any) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Avatar.Image
          size={PixelRatio.getPixelSizeForLayoutSize(20)}
          source={require('../../assets/images/avatar.jpg')}
        />
        <TouchableOpacity style={styles.editButton}>
          <Icon
            name="edit"
            size={PixelRatio.getFontScale() * 13}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText1}>{props.name}</Text>
        <Text style={styles.headerText2}>{props.mail}</Text>
      </View>

      <View></View>
    </View>
  );
};

export default HeaderProfile;
