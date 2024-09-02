import {
  View,
  Text,
  FlatList,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import {Button, SwipeAction} from '@ant-design/react-native';

const QueueCard = (props: any) => {
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
                <TouchableOpacity>
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
                  <Button type="primary" style={styles.cardButton}>
                    Play
                  </Button>
                </View>
              </View>
            </SwipeAction>
          </View>
        );
      }}
    />
  );
};

export default QueueCard;
