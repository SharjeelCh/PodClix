import {
  View,
  Text,
  PixelRatio,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {memo, useState, useEffect} from 'react';
import Header from '../../Components/DiscoverComponents/Header';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {width} from '../../Components/Dimensions';
import {Searchbar} from 'react-native-paper';
import {styles} from '../../Styles/DiscoverStyles/Styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import PodcastCard from '../../Components/ReusableComponents/PodcastCard';
import AuthorCard from '../../Components/ReusableComponents/AuthorCard';
import {useSelector} from 'react-redux';

const BasicTabsExample = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state: any) => state.podcastData?.data || []);
  const data2 = useSelector((state: any) => state.authorData.data);

  useEffect(() => {
    if (data.length > 0 && data2) {
      setLoading(false);
    }
  }, [data, data2]);

  const [searchQuery, setSearchQuery] = useState('');
  const FirstRoute = () => <PodcastCard data={data} profile={'discover'} />;
  const SecondRoute = () => <AuthorCard data2={data2} />;
  const layout = Dimensions.get('window');

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Podcasts'},
    {key: 'second', title: 'Authors'},
  ]);

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
        <Header text={'Discover'} />
        <Searchbar
          iconColor="white"
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor={'rgba(128, 128, 128, 0.9)'}
          inputStyle={styles.inputStyle}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <View style={{flex: 1}}>
          {loading ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#ac3fff" />
            </View>
          ) : (
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={props => (
                <TabBar
                  {...props}
                  style={styles.tabbar}
                  labelStyle={styles.labelStyle}
                  indicatorStyle={styles.indicator}
                  activeColor="#ac3fff"
                  inactiveColor="gray"
                />
              )}
              lazy={true}
            />
          )}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default BasicTabsExample;
