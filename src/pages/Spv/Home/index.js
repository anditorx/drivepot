import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ImgBgHomeSpv,
  ImgAvatarSample,
  Ic_userList,
  Ic_carSvg,
  Ic_request,
  ImgUserList,
  ImgRequest,
  ImgReqNotPickup,
  ImgCar,
  ImgCarRide,
} from '../../../assets';
import {colors} from '../../../utils';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Box, Button, Gap} from '../../../components/atoms';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SpvHome = ({navigation}) => {
  const renderContent = () => (
    <View style={styles.wrapperRenderContent}>
      <View style={styles.separatorSwipe}></View>
      <Gap height={30} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WaitForPickup')}
          style={{
            height: 150,
            width: 150,
            backgroundColor: colors.lightBlue,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
          }}>
          <Image
            source={ImgReqNotPickup}
            style={{height: 70, width: 70, resizeMode: 'contain'}}
          />
          <View style={styles.wrapTxt}>
            <Text
              style={{
                color: colors.white,
                fontSize: 17,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              WAIT FOR PICKUP
            </Text>
          </View>
        </TouchableOpacity>
        <Gap width={20} />
        <TouchableOpacity
          onPress={() => navigation.navigate('OnTheRoad')}
          style={{
            height: 150,
            width: 150,
            backgroundColor: colors.lightBlue,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
          }}>
          <Image
            source={ImgCarRide}
            style={{height: 70, width: 70, resizeMode: 'contain'}}
          />
          <View style={styles.wrapTxt}>
            <Text
              style={{
                color: colors.white,
                fontSize: 17,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              ON THE ROAD
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <Box
        img={ImgRequest}
        txtBox="REQUEST'S"
        onPress={() => navigation.navigate('SpvRequests')}
      />
      <Gap height={20} />
      <Box
        img={ImgUserList}
        txtBox="USER'S"
        onPress={() => navigation.navigate('SpvUsers')}
      />
      <Gap height={20} />
      <Box
        img={ImgCar}
        txtBox="CAR'S"
        onPress={() => navigation.navigate('SpvCars')}
      />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground source={ImgBgHomeSpv} style={styles.page}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.txtHeaderName}>Hi, Tomo</Text>
              <Text style={styles.txtHeaderGreetings}>
                Welcome to Drivepot App
              </Text>
            </View>
            <TouchableOpacity>
              <Image source={ImgAvatarSample} style={styles.imgAvatar} />
            </TouchableOpacity>
          </View>
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[200, 300, 470]}
          borderRadius={20}
          renderContent={renderContent}
        />
      </View>
    </ImageBackground>
  );
};

export default SpvHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapperBtn: {padding: 20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  txtHeaderName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtHeaderGreetings: {
    fontSize: 20,
  },
  imgAvatar: {
    height: 40,
    width: 40,
  },
  imgBgHomeSpv: {
    height: 350,
    width: '100%',
  },
  wrapperRenderContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 650,
  },
  separatorSwipe: {
    height: 5,
    width: '25%',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 20,
  },
  titleFormLogin: {textAlign: 'center', fontSize: 18, fontWeight: '600'},
  box: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    height: 120,
    justifyContent: 'center',
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  wrapTxt: {justifyContent: 'center'},
  titleBox: {fontSize: 22, color: colors.white, fontWeight: 'bold'},
  wrapTxt: {justifyContent: 'center'},
});
