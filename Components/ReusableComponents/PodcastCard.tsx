import {View, Text, PixelRatio, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles as styles2} from '../../Styles/HomeStyles/Styles';
import {Button} from '@ant-design/react-native';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const PodcastCard = memo((props: any) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={props.data}
      maxToRenderPerBatch={6}
      fadingEdgeLength={50}
      showsVerticalScrollIndicator={false}
      initialNumToRender={4}
      contentContainerStyle={[
        styles2.updateCardCont,
        props.profile === 'profile' && {paddingTop: 0},
      ]}
      renderItem={({item, index}) => {
        return (
          <View
            key={index}
            style={
              props.profile === 'discover' && {
                paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4.8),
              }
            }>
            <View>
              <View style={[styles2.updateCard]}>
                <TouchableOpacity onPress={props.handleImageClick}>
                  {props.profile === 'discover' && (
                    <Image
                      source={require('../../assets/images/avatar.jpg')}
                      style={styles2.UpdateCardImage}
                      resizeMode="cover"
                    />
                  )}
                </TouchableOpacity>
                <View
                  style={[
                    styles2.cardTextContainer,
                    props.profile === 'profile' && {
                      gap: PixelRatio.getPixelSizeForLayoutSize(3),
                    },
                  ]}>
                  <Text style={styles2.cardTitle}>{item.title}</Text>
                  <View style={styles2.innerTextWrap}>
                    <Text>{item.Channel}</Text>
                    <Text>|</Text>
                    <Text>{item.duration}</Text>
                  </View>
                  <Button
                    type="primary"
                    style={[
                      styles2.cardButton,
                      props.profile === 'profile' && {width: '40%'},
                    ]}
                    onPress={() => {
                      navigation.navigate('VideoPlayScreen', {item: item});
                    }}>
                    ▶ Play
                  </Button>
                  <Divider />
                </View>
              </View>
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
});

export default PodcastCard;
