import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
const CardHeader = (props: any) => {
  return (
    <View style={styles.cardheaderContainer}>
      <Text style={styles.cardHeaderText1}>{props.text}</Text>
      <TouchableOpacity
        style={styles.cardheaderButtton}
        onPress={props.HandleClick}>
        <Text style={styles.cardHeaderText2}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;
