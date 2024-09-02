import {View, Text, PixelRatio} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width} from '../../Components/Dimensions';
import Header from '../../Components/DiscoverComponents/Header';
import { useSelector } from 'react-redux';

const Profile = () => {
  const data=useSelector((state:any)=>state.podcastData.data);
  const data2=useSelector((state:any)=>state.authorData.data);

  console.log(data2);
  return (
    <GestureHandlerRootView
      style={{flex: 1, gap: PixelRatio.getPixelSizeForLayoutSize(6)}}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'rgba(24,26,32,255)',
          paddingHorizontal: width * 0.045,
          gap: PixelRatio.getPixelSizeForLayoutSize(6),
        }}>
        <Header text={'Profile'} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;
