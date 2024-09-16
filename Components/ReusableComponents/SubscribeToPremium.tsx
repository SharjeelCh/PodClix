import {
  View,
  Text,
  StatusBar,
  PixelRatio,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Button, Divider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../../Styles/ReusableStyles/subscription';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SubscribeToPremium = ({isVisible, setIsVisible}: props) => {
  const top = useSafeAreaInsets().top;
  const [choice, setChoice] = React.useState('');
  const [isPressed, setIsPressed] = React.useState(false);
  const [isPressed2, setIsPressed2] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [ispaymentMethod, setIsPaymentMethod] = React.useState(false);

  const handleChoice = (type: string) => {
    setChoice(type);
  };
  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
    setIsPaymentMethod(!ispaymentMethod);
  };
  return (
    <Modal
      isVisible={isVisible}
      style={[styles.subsContainer]}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      useNativeDriver={true}
      propagateSwipe={true}
      animationOutTiming={800}
      animationInTiming={800}>
      <Feather
        name="close"
        style={{marginTop: top + 12}}
        size={PixelRatio.getPixelSizeForLayoutSize(8)}
        onPress={() => setIsVisible(false)}
      />
      {choice !== '' && (
        <Text style={[styles.secondary, {textAlign: 'left', color: 'white'}]}>
          Select the payment method you want to choose
        </Text>
      )}
      {choice === '' ? (
        <View style={styles.innerCont}>
          <Text style={styles.mainText}>Subscribe to premium</Text>
          <Text style={styles.secondary}>
            Enjoy listening podcast with better audio quality, without
            restrictions and without ads
          </Text>
          <Pressable
            style={[styles.typeButton, isPressed && styles.active]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => handleChoice('monthly')}>
            <Icon
              name="crown"
              size={PixelRatio.getFontScale() * 57}
              color={'#9401ff'}
            />
            <View style={styles.priceCont}>
              <Text style={styles.priceMonthly}>9.99$</Text>
              <Text style={styles.monthText}> /month</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.descriptionText}>
              <Icon
                name="check"
                size={PixelRatio.getFontScale() * 20}
                color={'#9401ff'}
              />
              <Text style={styles.secondary}>
                Listening with better audio quality
              </Text>
            </View>
            <View style={styles.descriptionText}>
              <Icon
                name="check"
                size={PixelRatio.getFontScale() * 20}
                color={'#9401ff'}
              />
              <Text style={styles.secondary}>
                Listening without restrictions and ads
              </Text>
            </View>
            <View style={styles.descriptionText}>
              <Icon
                name="check"
                size={PixelRatio.getFontScale() * 20}
                color={'#9401ff'}
              />
              <Text style={styles.secondary}>Early access to new episodes</Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.typeButton, isPressed2 && styles.active]}
            onPressIn={() => setIsPressed2(true)}
            onPressOut={() => setIsPressed2(false)}
            onPress={() => handleChoice('yearly')}>
            <Icon
              name="crown"
              size={PixelRatio.getFontScale() * 57}
              color={'#9401ff'}
            />
            <View style={styles.priceCont}>
              <Text style={styles.priceMonthly}>99.99$</Text>
              <Text style={styles.monthText}> /year</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.descriptionText}>
              <Icon
                name="check"
                size={PixelRatio.getFontScale() * 20}
                color={'#9401ff'}
              />
              <Text style={styles.secondary}>
                Listening with better audio quality
              </Text>
            </View>
            <View style={styles.descriptionText}>
              <Icon
                name="check"
                size={PixelRatio.getFontScale() * 20}
                color={'#9401ff'}
              />
              <Text style={styles.secondary}>
                Listening without restrictions and ads
              </Text>
            </View>
            <View style={styles.descriptionText}>
              <Icon
                name="check"
                size={PixelRatio.getFontScale() * 20}
                color={'#9401ff'}
              />
              <Text style={styles.secondary}>Early access to new episodes</Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => {
              handlePaymentMethod('stripe');
            }}>
            <Text style={styles.secondary}>🇸</Text>
            <Text
              style={[styles.secondary, {position: 'absolute', left: '20%'}]}>
              Stripe
            </Text>
            <Icon
              name={ispaymentMethod ? 'circle-outline' : 'circle'}
              size={PixelRatio.getFontScale() * 23}
              color="#9610ff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continueButton}
            disabled={ispaymentMethod}>
            <Text style={styles.secondary}>Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </Modal>
  );
};

export default SubscribeToPremium;
