import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabbar from './Tabbar';

const MainNav = () => {
  const mainNav = createNativeStackNavigator();
  return (
    <mainNav.Navigator>
      <mainNav.Screen
        options={{headerShown: false}}
        name="Tabbar"
        component={Tabbar}
      />
    </mainNav.Navigator>
  );
};

export default MainNav;
