import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ic_arrowRightGrey, ImgCar01, Ic_car} from '../../../assets';
import {Gap, Separator} from '../../atoms';

const index = ({title, date, onPress, type, txt2, txt3, img}) => {
  if (type === 'list-img') {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <Image source={img} style={styles.img4litImg} />
          <View style={styles.listText}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtDate}>{txt2}</Text>
            <Text style={styles.txtDate}>{txt3}</Text>
          </View>
          <View>
            <Ic_arrowRightGrey />
          </View>
        </TouchableOpacity>
        <Gap height={15} />
        <Separator />
      </View>
    );
  }

  if (type === 'list-img-circle') {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <Image source={img} style={styles.img4litImgCircle} />
          <View style={styles.listText}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtDate}>{txt2}</Text>
          </View>
          <View>
            <Ic_arrowRightGrey />
          </View>
        </TouchableOpacity>
        <Gap height={15} />
        <Separator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
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
  img4litImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  img4litImgCircle: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});
