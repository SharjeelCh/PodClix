import {
  View,
  Text,
  PixelRatio,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/DiscoverComponents/Header';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {width} from '../../Components/Dimensions';
import {Searchbar} from 'react-native-paper';
import {styles} from '../../Styles/DiscoverStyles/Styles';
import {styles as styles2} from '../../Styles/HomeStyles/Styles';

import {Button, SwipeAction, Tabs} from '@ant-design/react-native';

const BasicTabsExample = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const tabs = [{title: 'Podcasts'}, {title: 'Authors'}];

  const style = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: 'transparent',
  };

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
          <Tabs
            tabs={tabs}
            tabBarTextStyle={{color: 'white'}}
            tabBarBackgroundColor="transparent">
            <View style={style}>
              <FlatList
                data={'sfdfdsfd'}
                maxToRenderPerBatch={6}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles2.updateCardCont}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        paddingBottom:
                          PixelRatio.getPixelSizeForLayoutSize(4.8),
                      }}>
                      <View>
                        <View style={styles2.updateCard}>
                          <TouchableOpacity>
                            <Image
                              source={require('../../assets/images/avatar.jpg')}
                              style={styles2.UpdateCardImage}
                              resizeMode="cover"
                            />
                          </TouchableOpacity>
                          <View style={styles2.cardTextContainer}>
                            <Text style={styles2.cardTitle}>
                              Deep Dive | How to quit your job the right way
                            </Text>
                            <View style={styles2.innerTextWrap}>
                              <Text>Apple Talk</Text>
                              <Text>|</Text>
                              <Text>21:53 mins</Text>
                            </View>
                            <Button type="primary" style={styles2.cardButton}>
                              Play
                            </Button>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <View style={style}>
              <Text style={{color: 'white'}}>Content of Second Tab</Text>
            </View>
          </Tabs>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default BasicTabsExample;
