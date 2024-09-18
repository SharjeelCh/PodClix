import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../Styles/Splash/Splash';
import {Wave} from 'react-native-animated-spinkit';
import {height} from '../../Components/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/MainNav';
type VideoPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Tabbar'
>;
type gettingStartedNavifationProps=NativeStackNavigationProp<
RootStackParamList,
'GetStarted'
>

type Props = {
  navigation: VideoPlayScreenNavigationProp;
};

const Splash = () => {
  const navigation = useNavigation<gettingStartedNavifationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'GetStarted'}],
      });
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(24,26,32,255)"
      />
      <Text style={{color: 'rgba(24,26,32,255)'}}>PodClix</Text>
      <View style={styles.InnerContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: height * 0.055, height: height * 0.055}}
        />
        <Text style={styles.text}>PodClix</Text>
      </View>
      <Wave size={height * 0.06} color="#9610ff" />
    </SafeAreaView>
  );
};

export default Splash;
