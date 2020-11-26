import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../../utils/colors';

const Input = ({
  label,
  secureTextEntry,
  type,
  icon,
  placeholder,
  value,
  onChangeText,
  onPress,
  shimmer,
  disable,
  select,
  onValueChange,
  selectItem,
  selectedValue,
  text,
}) => {
  const [border, setBorder] = useState(colors.greyLight);
  const onFocusForm = () => {
    setBorder(colors.primary);
  };
  const onBlurFrom = () => {
    setBorder(colors.greyLight);
  };
  const [date, setDate] = useState('');

  if (type === 'date-picker') {
    return (
      <View>
        <Text style={styles.label(border)}>{label}</Text>
        <TouchableOpacity style={styles.wrapperDate} onPress={onPress}>
          <Image source={icon} style={styles.iconDate} />
          <Text style={styles.txtDate}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (type === 'textarea') {
    return (
      <View>
        <Text style={styles.input(border)}>{label}</Text>
        <TextInput
          onFocus={onFocusForm}
          style={styles.textarea(border)}
          placeholder={placeholder}
          numberOfLines={5}
          multiline={true}
          onBlur={onBlurFrom}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
        />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label(border)}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        style={styles.input(border)}
        onBlur={onBlurFrom}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: (border) => ({
    color: colors.black,
    fontSize: 15,
  }),
  input: (border) => ({
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
  }),
  textarea: (border) => ({
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  }),
  wrapperDate: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 10,
    padding: 12,
  },
  iconDate: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    marginLeft: 10,
    marginRight: 30,
    height: 25,
    width: 25,
  },
  txtDate: {
    color: colors.grey1,
  },
});
