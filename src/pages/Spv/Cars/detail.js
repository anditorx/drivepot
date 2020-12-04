import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, Input, List} from '../../../components';
import {colors, useForm} from '../../../utils';
import {
  ImgCar01,
  ImgCar02,
  ImgCar03,
  ImgNoImg,
  ImgBtnImgPhoto,
} from '../../../assets';

const detail = ({navigation}) => {
  const [itemDriver] = useState([
    {
      id: 1,
      label: '-- Please Select Driver --',
      value: '',
    },
    {
      id: 2,
      label: 'Entis',
      value: 'Entis',
    },
    {
      id: 3,
      label: 'Dayat',
      value: 'Dayat',
    },
    {
      id: 4,
      label: 'Endang',
      value: 'Endang',
    },
  ]);

  const [form, setForm] = useForm({
    driver: 'Endang',
  });
  return (
    <View style={styles.page}>
      <Header
        title={'Car Detail'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Input label="Car Brand" value="Toyota Innova" />
        <Gap height={10} />
        <Input label="Plat Number" value="B 2020 BU" />
        <Gap height={10} />
        <Input
          label="Driver"
          value={form.driver}
          onValueChange={(value) => setForm('driver', value)}
          select
          selectItem={itemDriver}
        />
        <Gap height={30} />
        <TouchableOpacity>
          <Image source={ImgCar01} style={styles.img} />
          <View>
            <Image source={ImgBtnImgPhoto} style={styles.addImg} />
          </View>
        </TouchableOpacity>
        <Gap height={30} />
        <Button title="Update" onPress={() => navigation.replace('SpvCars')} />
        <Gap height={50} />
      </ScrollView>
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  wrapper: {
    flexDirection: 'row',
  },
  boxUpload: {},
  img: {
    height: 250,
    width: 250,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addImg: {
    position: 'absolute',
    height: 50,
    width: 50,
    right: 20,
    bottom: 0,
  },
});
