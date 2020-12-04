import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {List} from '../../../components';
import {colors} from '../../../utils';
import {
  ImgNoAva02,
  ImgSampleDriver01,
  ImgSampleDriver02,
  ImgSampleDriver03,
} from '../../../assets';

const driverList = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <List
        type="list-img-circle"
        title="Farel Ramanda"
        txt2="Driver"
        img={ImgSampleDriver01}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Dwiki Putra"
        txt2="Driver"
        img={ImgSampleDriver03}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Dadang"
        txt2="Driver"
        img={ImgSampleDriver02}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
    </ScrollView>
  );
};

export default driverList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});
