import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../Navigation/MainNav';
const {width, height} = Dimensions.get('screen');

type authStackNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'AuthStack'
>;

const bgs = ['rgba(24,26,32,255)', 'rgba(24,26,32,255)', 'rgba(24,26,32,255)'];
const DATA = [
  {
    key: '3571747',
    title: 'Podclix - Your Podcast Hub',
    description:
      'Discover and subscribe to your favorite podcasters seamlessly with Podclix.',
    image: require('../../assets/images/1.png'),
  },
  {
    key: '3571680',
    title: 'Stream Podcasts Effortlessly',
    description:
      'Enjoy high-quality streaming of your favorite podcasts anywhere, anytime with Podclix.',
    image: require('../../assets/images/2.png'),
  },
  {
    key: '3571603',
    title: 'Personalized Podcast Recommendations',
    description:
      'Get tailored podcast suggestions based on your interests with Podclix.',
    image: require('../../assets/images/3.png'),
  },
];

const Indicator = ({scrollX}: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {DATA.map((_, i) => {
        const scale = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.6, 0.8, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              margin: 6,
              opacity,
              transform: [{scale}],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({scrollX}: any) => {
  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, {backgroundColor: bg}]}
    />
  );
};

const Square = ({scrollX}: any) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: 'rgba(255,255,255,0.18)',
        borderRadius: 86,
        top: -height * 0.6,
        left: -height * 0.31,
        position: 'absolute',
        transform: [{rotate}, {translateX}],
      }}
    />
  );
};

export default function GetStarted() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef<Animated.FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navigation = useNavigation<authStackNavigationProps>();

  const handlePress = () => {
    if (currentIndex + 1 >= DATA.length) {
      navigation.navigate('AuthStack');
      return;
    }
    const nextIndex = currentIndex + 1 < DATA.length ? currentIndex + 1 : 0;

    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  };

  const borderWidth = scrollX.interpolate({
    inputRange: [0, width, 2 * width],
    outputRange: [1, 2.5, 3.5],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        scrollEventThrottle={32}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => {
          return (
            <View style={{width, alignItems: 'center', paddingHorizontal: 20}}>
              <View style={{flex: 0.7, justifyContent: 'center'}}>
                <Image
                  source={item.image}
                  style={{
                    width: width / 1.6,
                    height: width / 1.6,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flex: 0.3}}>
                <Text style={styles.title}>{item.description}</Text>
              </View>
            </View>
          );
        }}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / width,
          );
          setCurrentIndex(newIndex);
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: height * 0.05,
          marginBottom: height * 0.04,
        }}>
        <Indicator scrollX={scrollX} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Animated.View
              style={[
                styles.circularButton,
                {
                  borderWidth: borderWidth,
                },
              ]}>
              <Feather name="chevron-right" size={25} color={'white'} />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: PixelRatio.getFontScale() * 36,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  description: {
    fontWeight: '300',
    color: 'white',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  circularButton: {
    width: 66,
    height: 66,
    borderRadius: 35,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
