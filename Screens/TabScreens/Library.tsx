import {
  View,
  Text,
  SafeAreaView,
  PixelRatio,
  LogBox,
  Dimensions,
} from 'react-native';
import React, {memo, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {width} from '../../Components/Dimensions';
import Header from '../../Components/DiscoverComponents/Header';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import AuthorCard from '../../Components/ReusableComponents/AuthorCard';
import {styles} from '../../Styles/DiscoverStyles/Styles';
import QueueCard from '../../Components/LibraryComponents/QueueCard';
import {useSelector} from 'react-redux';

LogBox.ignoreLogs([
  'Warning: A props object containing a "key" prop is being spread into JSX',
]);

const Library = () => {
  const [index, setIndex] = useState(0);
  const layout = Dimensions.get('window');
  const data = useSelector((state: any) => state.podcastData?.data || []);
  const data2 = useSelector((state: any) => state.authorData.data);

  const [routes] = useState([
    {key: 'first', title: 'Subscriptions'},
    {key: 'second', title: 'Queues'},
  ]);

  const FirstRoute = () => <AuthorCard data2={data2} />;

  const SecondRoute = () => <QueueCard data={data} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
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
        <Header text={'My Library'} />
        <View style={{flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={restProps => (
              <TabBar
                {...restProps}
                style={styles.tabbar}
                labelStyle={styles.labelStyle}
                indicatorStyle={styles.indicator}
                activeColor="#ac3fff"
                inactiveColor="gray"
              />
            )}
            lazy={true}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Library;
