import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../../components';
import {colors, useForm} from '../../../utils';

const detail = ({navigation}) => {
  const [itemRole] = useState([
    {
      id: 0,
      label: '-- Please Select Role --',
      value: '',
    },
    {
      id: 1,
      label: 'User',
      value: 'User',
    },
    {
      id: 2,
      label: 'Driver',
      value: 'Driver',
    },
  ]);
  const [form, setForm] = useForm({
    role: 'User',
  });
  return (
    <View style={styles.page}>
      <Header
        title={'User Detail'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Input label="NIK" value="20180203001" />
        <Gap height={10} />
        <Input label="Full Name" value="Rachel Teresia" />
        <Gap height={10} />
        <Input label="Job Title" value="Business Development" />
        <Gap height={10} />
        <Input label="Phone Number" value="08128166060" />
        <Gap height={10} />
        <Input label="Password" value="123456" secureTextEntry />
        <Gap height={10} />
        <Input
          label="Role"
          value={form.role}
          onValueChange={(value) => setForm('role', value)}
          select
          selectItem={itemRole}
        />
        <Gap height={30} />
        <Button title="Update" onPress={() => navigation.replace('SpvUsers')} />
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
});
