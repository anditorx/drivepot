import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Header from '../../../components/moleculs/Header';
import {colors} from '../../../utils';
import {TabView, SceneMap} from 'react-native-tab-view';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserOrderList from './orderList';
import UserOrderArchive from './orderArchive';

const Tab = createMaterialTopTabNavigator();

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Order'}
        type="add"
        noElevation
        onPress={() => navigation.navigate('UserHome')}
        onPressAdd={() => navigation.navigate('UserOrderAdd')}
      />
      <Tab.Navigator>
        <Tab.Screen name="Request" component={UserOrderList} />
        <Tab.Screen name="Archive" component={UserOrderArchive} />
      </Tab.Navigator>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 20,
  },
  scene: {
    flex: 1,
  },
});
