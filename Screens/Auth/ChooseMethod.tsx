import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/AuthStyles/LGUIstyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PixelRatio} from 'react-native';
import {height, width} from '../../Components/Dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SocialButton from '../../Components/AuthReusableComponents/SocialButton';
import Divider from '../../Components/AuthReusableComponents/Divider';
import NeonButton from '../../Components/AuthReusableComponents/NeonButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/AuthStack';
import {RootStackParamList as RootStackParamListRegister} from '../../Navigation/MainNav';
type loginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type RegsiterProps = NativeStackNavigationProp<
  RootStackParamListRegister,
  'RegisterStack'
>;

const ChooseMethod = () => {
  const navigation = useNavigation<loginScreenProps>();
  const navigation2 = useNavigation<RegsiterProps>();
  const top = useSafeAreaInsets().top;
  const left = useSafeAreaInsets().left;
  return (
    <View style={styles.container}>
      <Pressable style={[styles.chevron, {top: top + 15, left: left + 10}]} onPress={()=>{navigation.goBack()}}>
        <Icon
          name="chevron-left"
          size={PixelRatio.getFontScale() * 42}
          color="white"
        />
      </Pressable>
      <Image
        source={require('../../assets/images/2.png')}
        style={{width: width / 2, height: width / 2}}
      />
      <Text style={styles.mainText}>Let's get you in</Text>
      <View style={styles.buttonCont}>
        <SocialButton icon={0} text="Google" onpress={() => {}} />
        <SocialButton icon={1} text="facebook" onpress={() => {}} />
        <SocialButton icon={2} text="phone" onpress={() => {}} />
      </View>
      <Divider text={'or'} />
      <NeonButton
        text="Sign in with password"
        handlePress={() => {
          navigation.navigate('Login');
        }}
      />
      <View style={{flexDirection: 'row', gap: width * 0.02}}>
        <Text>Don't have an account?</Text>
        <Text
          style={{color: '#9610ff'}}
          onPress={() => navigation2.navigate('RegisterStack')}>
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default ChooseMethod;
