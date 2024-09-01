import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '@ant-design/react-native';
import {Image} from 'react-native';
const Subscription = () => {
  return (
    <LinearGradient
      colors={['#b85bff', '#a026ff']}
      style={styles.subscriptionContainer}>
      <View style={styles.subscriptionTextCont}>
        <Text style={styles.subscriptionText1}>Enjoy All Benfits!</Text>
        <Text style={styles.subscriptionText2}>
          Enjoy listening podcast with better audio quality, without
          restrictions and withoud ads
        </Text>
        <Button style={styles.subscriptionButton}>Get Premium</Button>
      </View>
      <Image
        style={styles.subscriptionImage}
        source={require('../../assets/images/music.png')}
      />
    </LinearGradient>
  );
};

export default Subscription;
