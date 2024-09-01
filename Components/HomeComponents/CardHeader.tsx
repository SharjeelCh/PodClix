import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
const CardHeader = () => {
  return (
    <View style={styles.cardheaderContainer}>
      <Text style={styles.cardHeaderText1}>Subscriptions</Text>
      <TouchableOpacity style={styles.cardheaderButtton}>
        <Text style={styles.cardHeaderText2}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;
