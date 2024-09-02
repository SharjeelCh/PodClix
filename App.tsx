import {View, Text} from 'react-native';
import React from 'react';
import Tabbar from './Navigation/Tabbar';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './Navigation/MainNav';
import {Provider} from '@ant-design/react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';

export default function () {
  return (
    <ReduxProvider store={store}>
      <Provider>
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      </Provider>
    </ReduxProvider>
  );
}
