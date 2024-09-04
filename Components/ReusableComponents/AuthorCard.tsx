import {View, Text, PixelRatio, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles as styles2} from '../../Styles/HomeStyles/Styles';
import {Button, Tooltip} from '@ant-design/react-native';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/MainNav';

type AuthorPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AuthorPlayScreen'
>;

type Props = {
  navigation: AuthorPlayScreenNavigationProp;
};

const AuthorCard = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const navigation = useNavigation<AuthorPlayScreenNavigationProp>();
  return (
    <FlatList
      data={props.data2}
      maxToRenderPerBatch={6}
      showsVerticalScrollIndicator={false}
      fadingEdgeLength={50}
      contentContainerStyle={styles2.updateCardCont}
      initialNumToRender={4}
      renderItem={({item, index}) => {
        return (
          <View
            key={index}
            style={{
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4.8),
            }}>
            <View>
              <View style={[styles2.updateCard, {alignItems: 'center'}]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AuthorPlayScreen', {item: item});
                  }}>
                  <Image
                    source={require('../../assets/images/avatar.jpg')}
                    style={styles2.UpdateCardImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <View
                  style={[
                    styles2.cardTextContainer,
                    {
                      justifyContent: 'center',
                      gap: PixelRatio.getPixelSizeForLayoutSize(5),
                    },
                  ]}>
                  <Text style={styles2.cardTitle}>{item.podcastName}</Text>
                  <View style={styles2.innerTextWrap}>
                    <Text>{item.totalPodcasts}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setShowToolTip(!showToolTip);
                  }}>
                  <EvilIcons
                    name="dots-vertical"
                    size={PixelRatio.getPixelSizeForLayoutSize(6)}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default AuthorCard;
