import {View, Text, TouchableOpacity, PixelRatio, Image} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles as styles2} from '../../Styles/PlayScreenStyles/VideoPlaceScreenStyle';
import {truncateText} from '../../HelperFunctions/CommonFunctions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/MainNav';
import {useNavigation} from '@react-navigation/native';
type VideoPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayScreen'
>;

type Props = {
  navigation: VideoPlayScreenNavigationProp;
};
const ProfileCard = (props: any) => {
  const navigation = useNavigation<VideoPlayScreenNavigationProp>();
  return (
    <View
      style={{
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4.8),
      }}>
      <View style={{gap: PixelRatio.getPixelSizeForLayoutSize(3.4)}}>
        <View style={[styles2.updateCard, {alignItems: 'center'}]}>
          <View>
            <Image
              source={require('../../assets/images/avatar.jpg')}
              style={styles2.UpdateCardImage}
              resizeMode="cover"
            />
          </View>
          <View
            style={[
              styles2.cardTextContainer,
              {
                justifyContent: 'center',
                gap: PixelRatio.getPixelSizeForLayoutSize(5),
              },
            ]}>
            <Text style={styles2.cardTitle}>
              {truncateText(props.name, 23)}
            </Text>
            <View style={styles2.innerTextWrap}>
              <Text style={styles2.innerText}>{props.podcasts} podcasts</Text>
            </View>
            <TouchableOpacity
              style={styles2.shareButton}
              onPress={props.onshare}>
              <EvilIcons
                name="share-variant-outline"
                size={PixelRatio.getPixelSizeForLayoutSize(6)}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles2.innerText}>{props.data.duration}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
