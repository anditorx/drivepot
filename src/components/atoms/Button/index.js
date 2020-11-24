import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.txtBtn(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.primary,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  txtBtn: (type) => ({
    color: type === 'secondary' ? colors.brown : colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }),
});
