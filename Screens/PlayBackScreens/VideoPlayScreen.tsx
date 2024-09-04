import {
  View,
  Text,
  PixelRatio,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import {Route, useRoute} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width} from '../../Components/Dimensions';
import LessCommonHeader from '../../Components/ReusableComponents/LessCommonHeader';
import {truncateText} from '../../HelperFunctions/CommonFunctions';
import ProfileCard from '../../Components/VidePlayScreenComponents/ProfileCard';
import {styles as styles2} from '../../Styles/VideoPlaceScreenStyle';
import {Button} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import data from '../../Json/list.json';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const VideoPlayScreen = () => {
  const route = useRoute();
  const refRBSheet = useRef(null) as any;

  const onshare = () => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };
  const {item} = route.params as {item: any};
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
        <LessCommonHeader text={truncateText(item.title, 33)} />
        <ProfileCard
          name={'John Hamburger Show'}
          podcasts={'685'}
          data={item}
          onshare={onshare}
        />
        <Text style={styles2.mainTitle}>{item.title}</Text>
        <View style={styles2.actionContainer}>
          <Button type="primary" style={styles2.cardButton}>
            ▶ Play
          </Button>
          <TouchableOpacity>
            <Icon
              name="bookmark-multiple-outline"
              size={PixelRatio.getPixelSizeForLayoutSize(6)}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
          }}>
          <List.Accordion
            title="Description"
            titleStyle={{color: 'white', fontFamily: 'Roboto-Medium'}}
            style={{backgroundColor: 'rgba(24,26,32,255)'}}>
            <Text style={styles2.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officia sunt eveniet quam optio consectetur natus cum
              dolorem sequi error suscipit delectus doloremque porro, architecto
              non repellendus facere in hic?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quaerat quis dolorem quia unde,
              dicta architecto expedita deleniti. Aspernatur nulla voluptas
              nihil officia, minus dolor fugit excepturi quia quibusdam placeat
              officiis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quis eaque neque a similique minus suscipit cupiditate
              nesciunt et, voluptates, voluptatem iure temporibus itaque quo
              necessitatibus. Quos, rem delectus. Ducimus, obcaecati.lorem Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
              dolore adipisci modi praesentium ullam vitae dolores quo, iste
              fuga placeat nesciunt, optio, exercitationem architecto
              perspiciatis! Velit error quasi ducimus dolor!lorem Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Totam, voluptates
              ipsa quo omnis animi officia rem soluta, architecto eaque quaerat
              odio dolores repudiandae natus quibusdam dolorem sequi quam
              inventore dolorum!
            </Text>
          </List.Accordion>
        </ScrollView>
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
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default VideoPlayScreen;
