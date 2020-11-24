import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ic_logo} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Ic_logo />
      <Text style={styles.txt}>Drivepot</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 20,
    color: 'black',
  },
});
