import React, {memo} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/TabScreens/Home';
import Discover from '../Screens/TabScreens/Discover';
import Library from '../Screens/TabScreens/Library';
import Profile from '../Screens/TabScreens/Profile';
import {Easing} from 'react-native';

const MemoizedHome = memo(Home);
const MemoizedDiscover = memo(Discover);
const MemoizedLibrary = memo(Library);
const MemoizedProfile = memo(Profile);

export const Tabbar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      icon: 'home',
    },
    {
      key: 'discover',
      title: 'Discover',
      icon: 'compass',
    },
    {
      key: 'library',
      title: 'Library',
      icon: 'calendar',
    },
    {
      key: 'profile',
      title: 'Profile',
      icon: 'account',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MemoizedHome,
    discover: MemoizedDiscover,
    library: MemoizedLibrary,
    profile: MemoizedProfile,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      inactiveColor="#949494"
      activeColor="#33A3F4"
      keyboardHidesNavigationBar={true}
      sceneAnimationType="shifting"
      activeIndicatorStyle={{backgroundColor: 'transparent'}}
      getLazy={() => {
        return true;
      }}
      barStyle={{backgroundColor: 'rgba(24,26,32,255)'}}
      renderIcon={({route, focused, color}) => (
        <Icon name={route.icon} color={color} size={24} />
      )}
    />
  );
};
