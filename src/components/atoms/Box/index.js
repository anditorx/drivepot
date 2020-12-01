import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const Box = ({img, txtBox, onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.contentBox}>
        <Image
          source={img}
          style={{height: 100, width: 100, resizeMode: 'contain'}}
        />
        <View style={styles.wrapTxt}>
          <Text style={styles.titleBox}>{txtBox}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Box;

const styles = StyleSheet.create({
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
