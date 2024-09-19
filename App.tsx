import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './Navigation/MainNav';
import {Provider} from '@ant-design/react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Toasts} from '@backpackapp-io/react-native-toast';

export default function () {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ReduxProvider store={store}>
          <Provider>
            <NavigationContainer>
              <MainNav />
            </NavigationContainer>
          </Provider>
        </ReduxProvider>
        <Toasts />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
