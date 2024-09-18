import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/AuthStyles/SocialButton';

interface buttonProps {
  text: string;
  handlePress: any;
}

const NeonButton: React.FC<buttonProps> = ({text, handlePress}) => {
  return (
    <TouchableOpacity style={styles.neonButtonCont} onPress={handlePress}>
      <Text style={styles.neonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NeonButton;
