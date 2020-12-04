import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../../components';
import {colors} from '../../../utils';
import {ImgCar01, ImgCar02, ImgCar03} from '../../../assets';

const Cars = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Car List'}
        type="add"
        onPress={() => navigation.goBack()}
        onPressAdd={() => navigation.navigate('SpvCarsAdd')}
      />
      <ScrollView style={styles.content}>
        <List
          type="list-img"
          title="Toyota Innova"
          txt2="B 2020 BU"
          txt3="Driver: Endang"
          img={ImgCar01}
          onPress={() => navigation.navigate('SpvCarsDetail')}
        />
        <List
          type="list-img"
          title="Toyota Avanza"
          txt2="B 14140 XZ"
          txt3="Driver: Budi"
          img={ImgCar03}
          onPress={() => navigation.navigate('SpvCarsDetail')}
        />
        <List
          type="list-img"
          title="Honda City"
          txt2="B 4571 WG"
          txt3="Driver: -"
          img={ImgCar02}
          onPress={() => navigation.navigate('SpvCarsDetail')}
        />
      </ScrollView>
    </View>
  );
};

export default Cars;

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
