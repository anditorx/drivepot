import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button, Gap} from '../../atoms';
import {
  Ic_arrowBack,
  Ic_plus,
  // IconTrashBlack,
  Ic_delete,
} from '../../../assets';

const Header = ({
  onPress,
  title,
  type,
  onPressAdd,
  onPressDelete,
  noElevation,
  transparent,
}) => {
  if (type === 'transparent') {
    return (
      <View style={styles.containerTransparent}>
        <TouchableOpacity onPress={onPress}>
          <Ic_arrowBack />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  if (type === 'btn-back') {
    return (
      <View style={styles.container(noElevation)}>
        <TouchableOpacity onPress={onPress}>
          <Ic_arrowBack />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  if (type === 'add') {
    return (
      <View style={styles.container(noElevation)}>
        <TouchableOpacity onPress={onPress}>
          <Ic_arrowBack />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPressAdd}>
          <Ic_plus />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container(noElevation)}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (noElevation) => ({
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: noElevation ? 0 : 1,
  }),
  containerTransparent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
  },
});
