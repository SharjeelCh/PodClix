import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserProfile from '../Components/ProfileComponents/ProfileScreens/UserProfile';
import { Tabbar } from './Tabbar';
import VideoPlayScreen from '../Screens/PlayBackScreens/VideoPlayScreen';

const MainNav = () => {
  const mainNav = createNativeStackNavigator();
  return (
    <mainNav.Navigator>
      <mainNav.Screen
        options={{headerShown: false}}
        name="Tabbar"
        component={Tabbar}
      />
      <mainNav.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <mainNav.Screen
      name='VideoPlayScreen'
      component={VideoPlayScreen}
      options={{headerShown:false}}
      />
    </mainNav.Navigator>
  );
};

export default MainNav;
