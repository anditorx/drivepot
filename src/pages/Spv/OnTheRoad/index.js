import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../../components';
import {colors} from '../../../utils';
import {
  ImgCar01,
  ImgCar02,
  ImgCar03,
  ImgNoAva02,
  ImgSampleDriver05,
  ImgSampleDriver04,
  ImgSampleDriver03,
  ImgSampleDriver01,
  ImgSampleDriver02,
} from '../../../assets';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'On The Road'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <List
          type="list-img-circle"
          title="Farel Ramanda"
          txt2="Driver"
          img={ImgSampleDriver01}
          onPress={() => navigation.navigate('TrackLocation')}
        />
        <List
          type="list-img-circle"
          title="Dwiki Putra"
          txt2="Driver"
          img={ImgSampleDriver03}
          onPress={() => navigation.navigate('TrackLocation')}
        />
        <List
          type="list-img-circle"
          title="Dadang"
          txt2="Driver"
          img={ImgSampleDriver02}
          onPress={() => navigation.navigate('TrackLocation')}
        />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
