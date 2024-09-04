import {
  View,
  Text,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {width} from '../../Components/Dimensions';
import LessCommonHeader from '../../Components/ReusableComponents/LessCommonHeader';
import AuthorProfileCard from '../../Components/VidePlayScreenComponents/AuthorProfileCard';
import RBSheet from 'react-native-raw-bottom-sheet';
import data from '../../Json/list.json';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {styles as styles2} from '../../Styles/PlayScreenStyles/VideoPlaceScreenStyle';
import {useSelector} from 'react-redux';
import PodcastCard from '../../Components/ReusableComponents/PodcastCard';

const AuthorPlayScreen = () => {
  const route = useRoute();
  const dataa = useSelector((state: any) => state.podcastData?.data || []);
  const navigation = useNavigation();
  const {item} = route.params as {item: any};
  const refRBSheet = useRef(null) as any;
  const onshare = () => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };
  const handlePlayClick = () => {
  };
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
        <LessCommonHeader text="Author" />
        <AuthorProfileCard
          name={item.podcastName}
          podcasts={item.totalPodcasts}
          data={item}
          onshare={onshare}
        />
        {
          <PodcastCard
            data={dataa}
            profile={'profile'}
            handlePlayClick={handlePlayClick}
          />
        }
      </SafeAreaView>
      <RBSheet
        ref={refRBSheet}
        draggable
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: 'rgba(128,128,128,0.18)',
          },
          draggableIcon: {
            width: 80,
          },
        }}>
        <ScrollView>
          <View style={styles2.gridContainer}>
            {data.grids.map(grid => (
              <TouchableOpacity
                key={grid.icon}
                onPress={() => refRBSheet.current.close()}
                style={styles2.gridButtonContainer}>
                <View
                  style={[styles2.gridButton, {backgroundColor: grid.color}]}>
                  <FAIcon name={grid.icon} style={styles2.gridIcon} />
                </View>
                <Text style={styles2.gridLabel}>{grid.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </RBSheet>
    </GestureHandlerRootView>
  );
};

export default AuthorPlayScreen;
