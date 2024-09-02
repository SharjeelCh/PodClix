import {View, Text, PixelRatio, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles as styles2} from '../../Styles/HomeStyles/Styles';
import {Button} from '@ant-design/react-native';

const PodcastCard = memo((props: any) => {
  return (
    <FlatList
      data={props.data}
      maxToRenderPerBatch={6}
      showsVerticalScrollIndicator={false}
      initialNumToRender={4}
      contentContainerStyle={styles2.updateCardCont}
      renderItem={({item, index}) => {
        return (
          <View
            key={index}
            style={{
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4.8),
            }}>
            <View>
              <View style={styles2.updateCard}>
                <TouchableOpacity onPress={props.handleImageClick}>
                  <Image
                    source={require('../../assets/images/avatar.jpg')}
                    style={styles2.UpdateCardImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <View style={styles2.cardTextContainer}>
                  <Text style={styles2.cardTitle}>{item.title}</Text>
                  <View style={styles2.innerTextWrap}>
                    <Text>{item.Channel}</Text>
                    <Text>|</Text>
                    <Text>{item.duration}</Text>
                  </View>
                  <Button
                    type="primary"
                    style={styles2.cardButton}
                    onPress={props.handlePlayClick}>
                    Play
                  </Button>
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
