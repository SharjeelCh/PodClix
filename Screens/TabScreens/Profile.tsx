import {View, Text, PixelRatio, ScrollView} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width} from '../../Components/Dimensions';
import Header from '../../Components/DiscoverComponents/Header';
import {useSelector} from 'react-redux';
import Subscription from '../../Components/HomeComponents/Subscription';
import HeaderProfile from '../../Components/ProfileComponents/HeaderProfile';
import Button from '../../Components/ProfileComponents/Button';
import SubscribeToPremium from '../../Components/ReusableComponents/SubscribeToPremium';

const Profile = () => {
  const [isVisible, setIsVisible] = React.useState(false);

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
        <HeaderProfile
          name={'Andrew Ainsley'}
          mail={'sharjeelh6451@gmail.com'}
        />
        <ScrollView
          fadingEdgeLength={50}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: PixelRatio.getPixelSizeForLayoutSize(6),
            paddingBottom: PixelRatio.getPixelSizeForLayoutSize(6),
          }}>
          <Subscription setIsVisible={setIsVisible} />
          <Button
            icon={'account-outline'}
            text={'User Profile'}
            screen='UserProfile'
          />
          <Button
            icon={'pencil-outline'}
            text={'Edit Profile'}
            onPress={() => {}}
          />
          <Button
            icon={'bell-outline'}
            text={'Notification'}
            onPress={() => {}}
          />

          <Button
            icon={'cog-outline'}
            text={'Content Settings'}
            onPress={() => {}}
          />
          <Button
            icon={'shield-outline'}
            text={'Security'}
            onPress={() => {}}
          />
          <Button
            icon={'earth'}
            text={'Language & Region'}
            onPress={() => {}}
          />
          <Button
            icon={'moon-waning-crescent'}
            text={'Dark Mode'}
            onPress={() => {}}
          />
          <Button
            icon={'help-circle-outline'}
            text={'Help Center'}
            onPress={() => {}}
          />
          <Button icon={'logout-variant'} text={'Logout'} onPress={() => {}} />
        </ScrollView>
        <SubscribeToPremium isVisible={isVisible} setIsVisible={setIsVisible}/>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;
