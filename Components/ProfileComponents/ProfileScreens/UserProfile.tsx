import React from 'react';
import {View, PixelRatio, Text} from 'react-native';
import LessCommonHeader from '../../ReusableComponents/LessCommonHeader';
import {width} from '../../Dimensions';
import {
  Form,
  InputItem,
  DatePicker,
  List,
  Picker,
  Button,
} from '@ant-design/react-native';
import {styles} from '../../../Styles/ProfileStyles/style';

const UserProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(24,26,32,255)',
        gap: PixelRatio.getPixelSizeForLayoutSize(6),
        paddingHorizontal: width * 0.045,
      }}>
      <LessCommonHeader text={'Edit Profile'} />
    </View>
  );
};

export default UserProfile;
