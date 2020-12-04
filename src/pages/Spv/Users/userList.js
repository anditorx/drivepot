import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {List} from '../../../components';
import {colors} from '../../../utils';
import {
  ImgNoAva02,
  ImgSampleDriver05,
  ImgSampleDriver04,
  ImgSampleDriver03,
} from '../../../assets';

const userList = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <List
        type="list-img-circle"
        title="Rachel Teresia"
        txt2="Business Development"
        img={ImgSampleDriver05}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Rudi Hartono"
        txt2="Product Manager"
        img={ImgNoAva02}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Hanindya Dwi Putri"
        txt2="Account Manager"
        img={ImgSampleDriver04}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Andi Rusti"
        txt2="Software Engineer"
        img={ImgNoAva02}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Ronny Anggriawan"
        txt2="Software Engineer"
        img={ImgNoAva02}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Adi Yanto"
        txt2="Business Manager"
        img={ImgNoAva02}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
      <List
        type="list-img-circle"
        title="Darrisma Hidayat"
        txt2="Software Engineer"
        img={ImgNoAva02}
        onPress={() => navigation.navigate('SpvUsersDetail')}
      />
    </ScrollView>
  );
};

export default userList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});
