import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ic_arrowRightGrey, Ic_car} from '../../../assets';
import {Gap, Separator} from '../../atoms';

const index = ({title, date}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <Image source={Ic_car} style={styles.img} />
        <View style={styles.listText}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtDate}>{date}</Text>
        </View>
        <View>
          <Ic_arrowRightGrey />
        </View>
      </TouchableOpacity>
      <Gap height={15} />
      <Separator />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
  },
  listText: {
    flex: 1,
    marginLeft: 30,
  },
  txtTitle: {
    fontWeight: '600',
    fontSize: 17,
  },
  txtDate: {
    fontSize: 14,
  },
});
