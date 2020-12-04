import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../../components';
import {colors, useForm} from '../../../utils';

const add = ({navigation}) => {
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
    role: '',
  });
  return (
    <View style={styles.page}>
      <Header
        title={'Create User'}
        type="btn-back"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Input label="NIK" />
        <Gap height={10} />
        <Input label="Full Name" />
        <Gap height={10} />
        <Input label="Job Title" />
        <Gap height={10} />
        <Input label="Phone Number" />
        <Gap height={10} />
        <Input label="Password" />
        <Gap height={10} />
        <Input
          label="Role"
          value={form.role}
          onValueChange={(value) => setForm('role', value)}
          select
          selectItem={itemRole}
        />
        <Gap height={30} />
        <Button title="Save" onPress={() => navigation.replace('SpvUsers')} />
        <Gap height={50} />
      </ScrollView>
    </View>
  );
};

export default add;

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
