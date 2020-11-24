import React from 'react';
import {StyleSheet} from 'react-native';
import {Login, Splash} from './pages';
import {colors} from './utils';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 20,
    color: colors.black,
  },
});
