import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import {width} from '../../Components/Dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/HomeComponents/Header';
import Subscription from '../../Components/HomeComponents/Subscription';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import CardHeader from '../../Components/HomeComponents/CardHeader';
import {Button, List, Provider, SwipeAction} from '@ant-design/react-native';

export default class Home extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '▶️',
        onPress: async () => {},
        backgroundColor: '#a026ff',
        color: 'white',
      },
      {
        text: '🗒️',
        onPress: () => console.log('delete'),
        backgroundColor: 'orange',
        fontFamily: 'Roboto-Bold',
        color: 'white',
      },
    ];

    const combinedData = [
      {type: 'subscription', data: '2332432'},
      {type: 'update', data: '324hjasd'},
    ];

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

          <FlatList
            data={combinedData}
            keyExtractor={(item, index) => `${item.type}-${index}`}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View
                style={[
                  styles.scrollContainer,
                  {gap: PixelRatio.getPixelSizeForLayoutSize(6)},
                ]}>
                <Subscription />
                <CardHeader
                  text={'Subscriptions'}
                  HandleClick={() => {
                    console.log('clicked Subscription');
                  }}
                />
              </View>
            }
            renderItem={({item}) => {
              if (item.type === 'subscription') {
                return (
                  <FlatList
                    data={item.data}
                    horizontal
                    maxToRenderPerBatch={6}
                    fadingEdgeLength={30}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.subscriptionCardContainer}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity style={styles.subscriptionCard}>
                          <Image
                            source={require('../../assets/images/avatar.jpg')}
                            style={styles.subscriptionCardImage}
                            resizeMode="cover"
                          />
                        </TouchableOpacity>
                      );
                    }}
                  />
                );
              } else if (item.type === 'update') {
                return (
                  <View
                    style={[
                      styles.scrollContainer,
                      {
                        gap: PixelRatio.getPixelSizeForLayoutSize(6),
                        paddingTop: PixelRatio.getPixelSizeForLayoutSize(4.8),
                      },
                    ]}>
                    <CardHeader
                      text={'New Updates'}
                      HandleClick={() => {
                        console.log('clicked Updates');
                      }}
                    />
                    <FlatList
                      data={item.data}
                      maxToRenderPerBatch={6}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={styles.updateCardCont}
                      renderItem={({item}) => {
                        return (
                          <View
                            style={{
                              paddingBottom:
                                PixelRatio.getPixelSizeForLayoutSize(4.8),
                            }}>
                            <SwipeAction
                              right={right}
                              closeOnAction
                              closeOnTouchOutside>
                              <View style={styles.updateCard}>
                                <TouchableOpacity>
                                  <Image
                                    source={require('../../assets/images/avatar.jpg')}
                                    style={styles.UpdateCardImage}
                                    resizeMode="cover"
                                  />
                                </TouchableOpacity>
                                <View style={styles.cardTextContainer}>
                                  <Text style={styles.cardTitle}>
                                    Deep Dive | How to quit your job the right
                                    way
                                  </Text>
                                  <View style={styles.innerTextWrap}>
                                    <Text>Apple Talk</Text>
                                    <Text>|</Text>
                                    <Text>21:53 mins</Text>
                                  </View>
                                  <Button
                                    type="primary"
                                    style={styles.cardButton}>
                                    Play
                                  </Button>
                                </View>
                              </View>
                            </SwipeAction>
                          </View>
                        );
                      }}
                    />
                  </View>
                );
              }
              return null;
            }}
            // stickyHeaderIndices={[1]}
            fadingEdgeLength={50}
            ListHeaderComponentStyle={{zIndex: 10}}
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }
}
