import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  FlatList,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/MainNav';
import SubscribeToPremium from '../../Components/ReusableComponents/SubscribeToPremium';

type VideoPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayScreen'
>;

type Props = {
  navigation: VideoPlayScreenNavigationProp;
};

type AuthorPlayScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AuthorPlayScreen'
>;

type Props2 = {
  navigation: AuthorPlayScreenNavigationProp;
};

const ITEM_SIZE = PixelRatio.getPixelSizeForLayoutSize(40) * 1.09;
const UPDATE_SECTION_Y = PixelRatio.getPixelSizeForLayoutSize(95);

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation<VideoPlayScreenNavigationProp>();
  const navigation2 = useNavigation<AuthorPlayScreenNavigationProp>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const podcastData = [
      {
        title: 'Deep Dive | How to quit your job the right way',
        Channel: 'Apple Talk',
        duration: '21:53 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'The Ultimate Guide to Remote Work',
        Channel: 'Tech Insights',
        duration: '15:42 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Mastering Time Management Skills',
        Channel: 'Productivity Plus',
        duration: '30:20 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Strategies for Effective Networking',
        Channel: 'Career Boost',
        duration: '18:10 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Navigating Career Transitions Smoothly',
        Channel: 'Workplace Wisdom',
        duration: '25:00 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'The Art of Negotiating Salary',
        Channel: 'Finance Focus',
        duration: '22:35 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Building a Personal Brand Online',
        Channel: 'Digital Success',
        duration: '19:45 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Effective Communication in the Workplace',
        Channel: 'Leadership Lounge',
        duration: '27:12 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'Managing Stress and Avoiding Burnout',
        Channel: 'Wellness Weekly',
        duration: '20:30 mins',
        image: '../../assets/images/avatar.jpg',
      },
      {
        title: 'How to Create a Winning Resume',
        Channel: 'Job Hunt Tips',
        duration: '24:55 mins',
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
          backgroundColor: 'rgba(24,26,32,255)',
          paddingHorizontal: width * 0.045,
          gap: PixelRatio.getPixelSizeForLayoutSize(6),
        }}>
        <Header />

        <Animated.FlatList
          data={combinedData}
          keyExtractor={(item, index) => `${item.type}-${index}`}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: scrollY},
                },
              },
            ],
            {useNativeDriver: true},
          )}
          ListHeaderComponent={
            <View
              style={[
                styles.scrollContainer,
                {gap: PixelRatio.getPixelSizeForLayoutSize(6)},
              ]}>
              <Subscription setIsVisible={setIsVisible} />
              <CardHeader
                text={'Subscriptions'}
                HandleClick={() => {
                  console.log('clicked Subscription');
                }}
              />
            </View>
          }
          renderItem={({item, index}) => {
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
                      <TouchableOpacity
                        style={styles.subscriptionCard}
                        onPress={() => {
                          navigation2.navigate('AuthorPlayScreen', {
                            item: item,
                          });
                        }}>
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
                <Animated.View
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
                  <Animated.FlatList
                    data={data}
                    maxToRenderPerBatch={6}
                    initialNumToRender={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.updateCardCont}
                    renderItem={({item, index}) => {
                      const inputRange = [
                        -1,
                        0,
                        UPDATE_SECTION_Y + ITEM_SIZE * index,
                        UPDATE_SECTION_Y + ITEM_SIZE * (index + 2),
                      ].sort((a, b) => a - b);
                      const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0],
                      });
                      return (
                        <Animated.View
                          style={{
                            paddingBottom:
                              PixelRatio.getPixelSizeForLayoutSize(4.8),
                            transform: [{scale: scale}],
                          }}>
                          <SwipeAction
                            right={right}
                            closeOnAction
                            closeOnTouchOutside>
                            <View style={styles.updateCard}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('VideoPlayScreen', {
                                    item: item,
                                  });
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
                                  onPress={() => {
                                    navigation.navigate('VideoPlayScreen', {
                                      item: item,
                                    });
                                  }}
                                  type="primary"
                                  style={styles.cardButton}>
                                  ▶ Play
                                </Button>
                              </View>
                            </View>
                          </SwipeAction>
                        </Animated.View>
                      );
                    }}
                  />
                </Animated.View>
              );
            }
            return null;
          }}
          // stickyHeaderIndices={[1]}
          fadingEdgeLength={50}
          ListHeaderComponentStyle={{zIndex: 10}}
        />
        <SubscribeToPremium isVisible={isVisible} setIsVisible={setIsVisible}/>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
