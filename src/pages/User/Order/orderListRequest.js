import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap, Separator} from '../../../components';
import {Ic_arrowRightGrey, Ic_car} from '../../../assets';
import {List} from '../../../components';
import {colors} from '../../../utils';
const orderListRequest = () => {
  return (
    <View style={styles.page}>
      <List title="Ted X Talk Jakarta" date="10 December 2020" />
    </View>
  );
};

export default orderListRequest;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});
