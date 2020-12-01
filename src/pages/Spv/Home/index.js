import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  ImgBgHomeSpv,
  ImgAvatarSample,
  Ic_userList,
  Ic_carSvg,
  Ic_request,
  ImgUserList,
  ImgRequest,
  ImgCar,
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
      <Box
        img={ImgRequest}
        txtBox="REQUEST's"
        onPress={() => navigation.navigate('SpvRequests')}
      />
      <Gap height={20} />
      <Box
        img={ImgCar}
        txtBox="CAR's"
        onPress={() => navigation.navigate('SpvCars')}
      />
      <Gap height={20} />
      <Box
        img={ImgUserList}
        txtBox="USER's & DRIVER's"
        onPress={() => navigation.navigate('SpvUsers')}
      />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.txtHeaderName}>Hi, Tomo</Text>
              <Text style={styles.txtHeaderGreetings}>
                Welcome to Drivepot App
              </Text>
            </View>
            <View>
              <Image source={ImgAvatarSample} style={styles.imgAvatar} />
            </View>
          </View>
          <View>
            <Image source={ImgBgHomeSpv} style={styles.imgBgHomeSpv} />
          </View>
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[200, 300, 470]}
          borderRadius={20}
          renderContent={renderContent}
        />
      </View>
    </View>
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
    height: 470,
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
});
