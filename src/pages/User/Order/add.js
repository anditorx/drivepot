import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input} from '../../../components';
import {colors} from '../../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ic_calender, Ic_time} from '../../../assets';

const add = ({navigation}) => {
  // date picker
  const [date2, setDate2] = useState('DD-MM-YYYY');
  const [time, setTime] = useState('08:00');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_ob = currentDate;
    let dt = ('0' + date_ob.getDate()).slice(-2);
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let result = dt + '/' + month + '/' + year;
    setDate2(result);
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

  return (
    <View style={styles.page}>
      <Header
        title={'Create Order'}
        type="btn-back"
        onPress={() => navigation.navigate('UserOrder')}
      />
      <View style={styles.content}>
        <Input label="Title" placeholder="Enter your title" />
        <Gap height={10} />
        <Input
          label="Select Date"
          type={'date-picker'}
          text={date2}
          icon={Ic_calender}
          onPress={showDatepicker}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Gap height={10} />
        <Input
          label="Select Time"
          type={'date-picker'}
          text={time}
          icon={Ic_time}
          onPress={showTimepicker}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Gap height={10} />
        <Input label="Destination" placeholder="Set your destination" />
      </View>
    </View>
  );
};

export default add;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});
