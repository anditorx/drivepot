import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Header = ({text}) => {
  return (
    <View style={styles.viewHeader}>
      <Text style={styles.txtHeader}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewHeader: {
    backgroundColor: colors.grey4,
    marginTop: 30,
    width: '65%',
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
