import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../Screens/Auth/Register/Signup';

export type RootStackParamListRegister = {
  Signup: undefined;
};

const RegisterStack = () => {
  const stack = createNativeStackNavigator<RootStackParamListRegister>();

  return (
    <stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup">
      <stack.Screen name="Signup" component={Signup} />
    </stack.Navigator>
  );
};

export default RegisterStack;
