import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseMethod from '../Screens/Auth/ChooseMethod';
import Login from '../Screens/Auth/Login';


export type RootStackParamList = {
  Login:undefined,
  ChooseMethod:undefined
};

const AuthStack = () => {
  const stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ChooseMethod">
      <stack.Screen name="ChooseMethod" component={ChooseMethod} />
      <stack.Screen name="Login" component={Login} />
    </stack.Navigator>
  );
};

export default AuthStack;
