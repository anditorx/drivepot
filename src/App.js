import React from 'react';
import {StyleSheet} from 'react-native';
import {Splash} from './pages';

const App = () => {
  return <Splash />;
};

export default App;

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
