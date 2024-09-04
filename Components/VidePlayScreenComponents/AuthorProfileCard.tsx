import {View, Text, TouchableOpacity, PixelRatio, Image} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles as styles2} from '../../Styles/PlayScreenStyles/VideoPlaceScreenStyle';
import {styles} from '../../Styles/PlayScreenStyles/AuthorPLayStyles';

import {truncateText} from '../../HelperFunctions/CommonFunctions';
import {Divider} from 'react-native-paper';

const AuthorProfileCard = (props: any) => {
  const [Subscribe, setSubscribe] = useState<Boolean>(false);
  const handleSubscribe = () => {
    setSubscribe(!Subscribe);
  };
  
  return (
    <View style={{gap: PixelRatio.getPixelSizeForLayoutSize(4)}}>
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
          <Text style={styles2.cardTitle}>{truncateText(props.name, 23)}</Text>
          <View style={styles2.innerTextWrap}>
            <Text style={styles2.innerText}>{props.podcasts}</Text>
          </View>
          <View style={styles.subscribeContain}>
            <TouchableOpacity
              style={
                !Subscribe
                  ? styles.SubscribeBUttonUn
                  : styles.SubscribeBUttonYes
              }
              onPress={handleSubscribe}>
              <Text
                style={[styles.subscribeText, Subscribe && {color: 'blue'}]}>
                {Subscribe ? '✔' : '+'}
              </Text>
              <Text
                style={[styles.subscribeText, Subscribe && {color: 'blue'}]}>
                {Subscribe ? 'Subscribed' : 'Subscribe'}
              </Text>
            </TouchableOpacity>
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
      </View>
      <Text></Text>
      <View style={styles.allHeader}>
        <Text style={styles2.cardTitle}>{props.podcasts}</Text>
        <TouchableOpacity>
          <EvilIcons
            name="arrow-up-down"
            size={PixelRatio.getPixelSizeForLayoutSize(6)}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <Divider />
    </View>
  );
};

export default AuthorProfileCard;
