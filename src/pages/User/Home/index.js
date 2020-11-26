import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ImgBgHomeUser, ImgAvatarSample} from '../../../assets';
import {colors} from '../../../utils';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button, Gap} from '../../../components/atoms';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.txtHeaderName}>Hi, Rachel</Text>
              <Text style={styles.txtHeaderGreetings}>
                Welcome to Drivepot App
              </Text>
            </View>
            <View>
              <Image source={ImgAvatarSample} style={styles.imgAvatar} />
            </View>
          </View>
          <Gap height={150} />
          <View>
            <Image source={ImgBgHomeUser} style={styles.imgBgHomeUser} />
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <Button
            title="ORDER"
            type="secondary"
            onPress={() => navigation.replace('UserOrder')}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

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
  imgBgHomeUser: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
});
