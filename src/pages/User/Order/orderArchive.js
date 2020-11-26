import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../../components';
import {colors} from '../../../utils';

const orderArchive = () => {
  return (
    <View style={styles.page}>
      <List title="Meeting with Permata" date="20 November 2020" />
      <List title="UIT with CocaCola" date="17 November 2020" />
      <List title="Google Developer MeetUp" date="22 October 2020" />
      <List title="Meeting with BNI" date="10 October 2020" />
    </View>
  );
};

export default orderArchive;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});
