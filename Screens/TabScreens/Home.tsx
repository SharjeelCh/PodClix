import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  PixelRatio,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import {width} from '../../Components/Dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/HomeComponents/Header';
import Subscription from '../../Components/HomeComponents/Subscription';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import CardHeader from '../../Components/HomeComponents/CardHeader';
const Home = () => {
  return (
    <GestureHandlerRootView
      style={{flex: 1, gap: PixelRatio.getPixelSizeForLayoutSize(6)}}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.9)',
          paddingHorizontal: width * 0.045,
          gap: PixelRatio.getPixelSizeForLayoutSize(6),
        }}>
        <Header />
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{
            gap: PixelRatio.getPixelSizeForLayoutSize(6),
          }}>
          <Subscription />
          <View>
            <CardHeader />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
