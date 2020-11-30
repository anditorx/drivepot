import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../../components';

const setLocation = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="transparent"
        onPress={() => navigation.navigate('UserOrderAdd')}
      />
    </View>
  );
};

export default setLocation;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
