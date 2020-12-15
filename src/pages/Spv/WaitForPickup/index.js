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
} from '../../../assets';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Wait For Pickup'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <List
          type="list-img-circle"
          title="Rachel Teresia"
          txt2="Business Development"
          img={ImgSampleDriver05}
          // onPress={() => navigation.navigate('SpvUsersDetail')}
        />
        <List
          type="list-img-circle"
          title="Rudi Hartono"
          txt2="Product Manager"
          img={ImgNoAva02}
          // onPress={() => navigation.navigate('SpvUsersDetail')}
        />
        <List
          type="list-img-circle"
          title="Hanindya Dwi Putri"
          txt2="Account Manager"
          img={ImgSampleDriver04}
          // onPress={() => navigation.navigate('SpvUsersDetail')}
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
