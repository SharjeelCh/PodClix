import {View, Text} from 'react-native';
import React from 'react';
import Tabbar from './Navigation/Tabbar';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './Navigation/MainNav';

export default function () {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}
