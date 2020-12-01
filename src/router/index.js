import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Splash,
  UserHome,
  UserOrder,
  UserOrderListPending,
  UserOrderArchive,
  UserOrderAdd,
  UserOrderSetLocation,
  SpvHome,
  DriverHome,
  SpvCars,
  SpvRequests,
  SpvUsers,
  SpvRequestsDetail,
} from '../pages';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserHome"
        component={UserHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserOrder"
        component={UserOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserOrderListPending"
        component={UserOrderListPending}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserOrderArchive"
        component={UserOrderArchive}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserOrderAdd"
        component={UserOrderAdd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserOrderSetLocation"
        component={UserOrderSetLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpvHome"
        component={SpvHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DriverHome"
        component={DriverHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpvCars"
        component={SpvCars}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpvRequests"
        component={SpvRequests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpvUsers"
        component={SpvUsers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpvRequestsDetail"
        component={SpvRequestsDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
