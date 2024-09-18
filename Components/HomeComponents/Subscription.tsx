import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Animated,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '@ant-design/react-native';
import {Image} from 'react-native';
const Subscription = ({setIsVisible}: any) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const containerBg = animatedValue.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 1],
    outputRange: ['#a026ff', '#a026ff', '#ff2d55', '#ff2d55', '#ff2d55'],
  });
  const animation = (toValue: any) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    });
  const [index, setIndex] = React.useState(0);
  const onPress = () => {
    setIndex(index === 1 ? 0 : 1);
    animation(index === 1 ? 0 : 1).start();
  };
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[styles.subscriptionContainer, {backgroundColor: containerBg}]}>
        <View style={styles.subscriptionTextCont}>
          <Text style={styles.subscriptionText1}>Enjoy All Benfits!</Text>
          <Text style={styles.subscriptionText2}>
            Enjoy listening podcast with better audio quality, without
            restrictions and withoud ads
          </Text>
          <Button
            style={styles.subscriptionButton}
            onPress={() => {
              setIsVisible(true);
            }}>
            Get Premium
          </Button>
        </View>
        <Animated.Image
          style={[
            styles.subscriptionImage,
            {
              transform: [
                {
                  perspective: 400,
                },

                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.9, 1],
                  }),
                },
              ],
            },
          ]}
          source={require('../../assets/images/music.png')}
        />
      </Animated.View>
    </Pressable>
  );
};

export default Subscription;
