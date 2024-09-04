import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserProfile from '../Components/ProfileComponents/ProfileScreens/UserProfile';
import {Tabbar} from './Tabbar';
import VideoPlayScreen from '../Screens/PlayBackScreens/VideoPlayScreen';
import AuthorPlayScreen from '../Screens/PlayBackScreens/AuthorPlayScreen';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Tabbar: undefined;
  UserProfile: {userId: any};
  VideoPlayScreen: {item: any};
  AuthorPlayScreen: {item: string};
};

export type UserProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserProfile'
>;
export type VideoPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayScreen'
>;

const MainNav = () => {
  const mainNav = createNativeStackNavigator<RootStackParamList>();

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
        name="VideoPlayScreen"
        component={VideoPlayScreen}
        options={{headerShown: false}}
      />
      <mainNav.Screen
        name="AuthorPlayScreen"
        component={AuthorPlayScreen}
        options={{headerShown: false}}
      />
    </mainNav.Navigator>
  );
};

export default MainNav;
