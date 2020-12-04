import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Ic_calender, Ic_time} from '../../../assets';
import {Button, Gap, Header, Input, List} from '../../../components';
import {colors, useForm} from '../../../utils';

const RequestsDetail = ({navigation}) => {
  // date picker
  const [date2, setDate2] = useState('15-12-2020');
  const [time2, setTime2] = useState('09:45');
  const [time, setTime] = useState('08:00');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState('');

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
    driver: '',
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const currentTime = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_ob = currentDate;
    let dt = ('0' + date_ob.getDate()).slice(-2);
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let result = dt + '/' + month + '/' + year;

    let time_ob = currentTime;
    let timeRes =
      time_ob.getHours() +
      ':' +
      time_ob.getMinutes() +
      ':' +
      time_ob.getSeconds();
    setDate2(result);
    setTime2(timeRes);
    // setForm('tanggal', result);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  // end date picker

  const openLocation = () => {
    setShowLocation(true);
  };

  return (
    <View style={styles.page}>
      <Header
        title={'Request Detail'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Input label="User Request" value="Tamara Putri" disable />
        <Gap height={10} />
        <Input
          label="From"
          value="Jln Cidodol Raya No.40, Kebayoran Lama, Jakarta Selatan"
          disable
        />
        <Gap height={10} />
        <Input label="Go To" value="Pondok Indah Mall 2" disable />
        <Gap height={10} />
        <Input
          label="Select Date"
          type={'date-picker'}
          text={date2}
          icon={Ic_calender}
          onPress={showDatepicker}
          disable
        />
        <Gap height={10} />
        <Input
          label="Select Time"
          type={'date-picker'}
          text={time2}
          icon={Ic_time}
          onPress={showTimepicker}
          disable
        />
        <Gap height={10} />
        <Input
          label="Driver"
          value={form.driver}
          onValueChange={(value) => setForm('driver', value)}
          select
          selectItem={itemDriver}
        />
        <Gap height={20} />
        <Button
          title="Set Driver"
          onPress={() => navigation.replace('SpvRequests')}
        />
        <Gap height={50} />
      </ScrollView>
    </View>
  );
};

export default RequestsDetail;

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
