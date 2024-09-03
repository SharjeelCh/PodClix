import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/ProfileStyles/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WhiteSpace, Switch, List} from '@ant-design/react-native';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
const Button = (props: any) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Micon
        name={props.icon}
        color={'white'}
        size={PixelRatio.getFontScale() * 28}
      />
      <Text style={styles.buttonText}>{props.text}</Text>
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      {props.text !== 'Dark Mode' ? (
        <Icon
          name="chevron-right"
          color={'white'}
          size={PixelRatio.getFontScale() * 28}
        />
      ) : (
        <Switch checkedChildren="☀️" unCheckedChildren="🌒" defaultChecked />
      )}
    </TouchableOpacity>
  );
};

export default Button;
