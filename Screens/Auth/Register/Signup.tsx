import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../../Styles/AuthStyles/LoginStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PixelRatio} from 'react-native';
import {height, width} from '../../../Components/Dimensions';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import SocialButton from '../../../Components/AuthReusableComponents/SocialButton';
import Divider from '../../../Components/AuthReusableComponents/Divider';
import NeonButton from '../../../Components/AuthReusableComponents/NeonButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Navigation/AuthStack';
import {RootStackParamList as RootStackParamListRegister} from '../../../Navigation/MainNav';
import {Checkbox} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {
  ShowErrorToast,
  ShowSuccessToast,
} from '../../../Components/Toasts/Toast';

type loginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type RegsiterProps = NativeStackNavigationProp<
  RootStackParamListRegister,
  'RegisterStack'
>;

const Signup = () => {
  const navigation = useNavigation<loginScreenProps>();
  const navigation2 = useNavigation<RegsiterProps>();
  const top = useSafeAreaInsets().top;
  const left = useSafeAreaInsets().left;
  const [check, setCheck] = React.useState(false);
  const [secure, setSecure] = React.useState(true);
  const iconPaths = [
    require('../../../assets/images/socialIcons/google.png'),
    require('../../../assets/images/socialIcons/facebook.png'),
    require('../../../assets/images/socialIcons/phone.png'),
  ];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => {
    ShowSuccessToast('Login Successful');
    navigation2.navigate('Tabbar');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Pressable
        style={[styles.chevron, {top: top + 15, left: left + 10}]}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          name="chevron-left"
          size={PixelRatio.getFontScale() * 42}
          color="white"
        />
      </Pressable>

      <Image
        source={require('../../../assets/images/logo.png')}
        style={{width: width / 4.7, height: width / 4.7}}
      />
      <Text style={styles.mainText}>Create your Account</Text>
      <View style={styles.inputMain}>
        <View style={styles.inputContainer}>
          <Icon
            name="email"
            size={PixelRatio.getFontScale() * 20}
            color="gray"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Email"
                inputMode="email"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={{color: 'white', fontFamily: 'Roboto', width: '100%'}}
              />
            )}
            name="email"
          />
        </View>

        <View style={[styles.inputContainer]}>
          <Icon
            name="lock"
            size={PixelRatio.getFontScale() * 20}
            color="gray"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Password"
                inputMode="numeric"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={secure}
                style={{color: 'white', fontFamily: 'Roboto', width: '80%'}}
              />
            )}
            name="password"
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? 'eye-off' : 'eye'}
              size={PixelRatio.getFontScale() * 20}
              color={secure ? '#9610ff' : 'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkContainer}>
        <Checkbox
          status={check ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheck(!check);
          }}
          uncheckedColor="#9610ff"
          color="#9610ff"
        />
        <Text style={styles.rememberText}>Remember me</Text>
      </View>
      <NeonButton
        text="Sign in"
        handlePress={handleSubmit(
          data => {
            onSubmit(data);
          },
          error => {
            ShowErrorToast('Please fill all the fields');
          },
        )}
      />

      <Divider text={'or continue with'} />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity style={styles.iconCont}>
            <Image source={iconPaths[0]} style={styles.imageSize} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCont}>
            <Image source={iconPaths[1]} style={styles.imageSize} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCont}>
            <Image source={iconPaths[2]} style={styles.imageSize} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: width * 0.02}}>
        <Text>Already have an account?</Text>
        <Text
          style={{color: '#9610ff'}}
          onPress={() => navigation2.navigate('AuthStack')}>
          Login
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
