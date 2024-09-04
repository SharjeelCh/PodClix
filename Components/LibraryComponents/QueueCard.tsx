import {
  View,
  Text,
  FlatList,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import {Button, SwipeAction} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation/MainNav';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type VideoPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayScreen'
>;

type Props = {
  navigation: VideoPlayScreenNavigationProp;
};

const QueueCard = memo((props: any) => {
  const navigation = useNavigation<VideoPlayScreenNavigationProp>();
  const left = [
    {
      text: '❌',
      onPress: async () => {},
      backgroundColor: 'transparent',
      color: 'white',
    },
  ];
  return (
    <FlatList
      data={props.data}
      maxToRenderPerBatch={6}
      fadingEdgeLength={50}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.updateCardCont}
      renderItem={({item}) => {
        return (
          <View
            style={{
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4.8),
            }}>
            <SwipeAction right={left} closeOnAction closeOnTouchOutside>
              <View style={styles.updateCard}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('VideoPlayScreen', {item: item});
                  }}>
                  <Image
                    source={require('../../assets/images/avatar.jpg')}
                    style={styles.UpdateCardImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={styles.innerTextWrap}>
                    <Text>{item.Channel}</Text>
                    <Text>|</Text>
                    <Text>{item.duration}</Text>
                  </View>
                  <Button
                    type="primary"
                    style={styles.cardButton}
                    onPress={() => {
                      navigation.navigate('VideoPlayScreen', {item: item});
                    }}>
                    ▶ Play
                  </Button>
                </View>
              </View>
            </SwipeAction>
          </View>
        );
      }}
    />
  );
});
export default QueueCard;
