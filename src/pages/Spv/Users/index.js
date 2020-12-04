import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../../components';
import {colors} from '../../../utils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserList from './userList';
import DriverList from './driverList';
const Tab = createMaterialTopTabNavigator();

const Users = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Users'}
        type="add"
        noElevation
        onPress={() => navigation.goBack()}
        onPressAdd={() => navigation.navigate('SpvUsersAdd')}
      />
      <Tab.Navigator>
        <Tab.Screen name="User" component={UserList} />
        <Tab.Screen name="Driver" component={DriverList} />
      </Tab.Navigator>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 20,
  },
});
