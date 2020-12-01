import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../../components';
import {colors} from '../../../utils';

const Requests = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Request List'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <List
          title="Tamara Putri"
          date="16 December 2020"
          onPress={() => navigation.navigate('SpvRequestsDetail')}
        />
        <List
          title="Amalia Maharani"
          date="15 December 2020"
          onPress={() => navigation.navigate('SpvRequestsDetail')}
        />
        <List
          title="Rizky Ramadhania"
          date="10 December 2020"
          onPress={() => navigation.navigate('SpvRequestsDetail')}
        />
      </View>
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
