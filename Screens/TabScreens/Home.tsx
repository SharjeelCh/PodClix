import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../Styles/HomeStyles/Styles';
import {width} from '../../Components/Dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/HomeComponents/Header';
import Subscription from '../../Components/HomeComponents/Subscription';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import CardHeader from '../../Components/HomeComponents/CardHeader';
import {Button, List, Provider, SwipeAction} from '@ant-design/react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthorData, setPodcastData} from '../../Redux/createSlice';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const podcastData = [
      {
        title: 'Deep Dive | How to quit your job the right way',
        Channel: 'Apple Talk',
        duration: '21:53 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Deep Dive | How to quit your job the right way',
        Channel: 'Apple Talk',
        duration: '21:53 mins',
        image: '../../assets/images/avatar.jpg',
      },
    ];

    const authorData = [
      {
        podcastName: 'Ted Talks Daily',
        totalPodcasts: '489 Podcasts',
        image: '../../assets/images/avatar.jpg',
      },
      {
        podcastName: 'Ted Talks Daily',
        totalPodcasts: '489 Podcasts',
        image: '../../assets/images/avatar.jpg',
      },
    ];
    dispatch(setPodcastData(podcastData));
    dispatch(setAuthorData(authorData));
  }, []);
  const data = useSelector((state: any) => state.podcastData?.data || []);
  const data2 = useSelector((state: any) => state.authorData.data);
  const right = [
    {
      text: '▶',
      onPress: async () => {},
      backgroundColor: 'rgba(128,128,128,0.1)',
      color: 'white',
    },
    {
      text: '+',
      onPress: () => console.log('delete'),
      backgroundColor: 'orange',
      fontFamily: 'Roboto-Bold',
      color: 'black',
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
          backgroundColor: 'rgba(24,26,32,255)',
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
                  initialNumToRender={4}
                  data={data2}
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
                    data={data}
                    maxToRenderPerBatch={6}
                    initialNumToRender={3}
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
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('VideoPlayScreen',{item:item});
                                }}>
                                <Image
                                  source={require('../../assets/images/avatar.jpg')}
                                  style={styles.UpdateCardImage}
                                  resizeMode="cover"
                                />
                              </TouchableOpacity>
                              <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>
                                  {item.title}
                                </Text>
                                <View style={styles.innerTextWrap}>
                                  <Text>{item.Channel}</Text>
                                  <Text>|</Text>
                                  <Text>{item.duration}</Text>
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
