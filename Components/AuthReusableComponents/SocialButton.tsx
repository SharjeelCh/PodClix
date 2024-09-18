import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/AuthStyles/SocialButton';
import {Image} from 'react-native';

interface socialProps {
  icon: number;
  text: string;
  onpress: any;
}

const SocialButton: React.FC<socialProps> = ({icon, text, onpress}) => {
  const iconPaths = [
    require('../../assets/images/socialIcons/google.png'),
    require('../../assets/images/socialIcons/facebook.png'),
    require('../../assets/images/socialIcons/phone.png'),
  ];

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={iconPaths[icon]} style={{width: PixelRatio.getFontScale()*35, height: PixelRatio.getFontScale()*35}} />
      <Text style={styles.socialText}>Continue with {text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
