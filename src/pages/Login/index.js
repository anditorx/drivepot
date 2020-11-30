import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ImgBgLogin} from '../../assets';
import {colors, useForm} from '../../utils';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button, Gap, Input} from '../../components/atoms';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onPressLogin = async () => {
    switch (form.email) {
      case 'User':
        navigation.replace('UserHome');
        break;
      case 'Spv':
        navigation.replace('SpvHome');
        break;
      case 'Driver':
        navigation.replace('DriverHome');
        break;
      default:
        break;
    }
  };

  const renderContent = () => (
    <View style={styles.wrapperRenderContent}>
      <View style={styles.separatorSwipe}></View>
      <Gap height={8} />
      <Text style={styles.titleFormLogin}>Login with your account</Text>
      <Gap height={30} />
      <Input
        label="Email"
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(value) => setForm('email', value)}
      />
      <Gap height={10} />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(value) => setForm('password', value)}
      />
      <Gap height={35} />
      <Button title="Login" onPress={onPressLogin} />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <ImageBackground
        source={ImgBgLogin}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}>
        <View>
          <Text style={styles.titlePage}>LOGIN</Text>
        </View>
      </ImageBackground>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[55, 350]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  content: {
    padding: 20,
  },
  titlePage: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  wrapperRenderContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 350,
  },
  separatorSwipe: {
    height: 3,
    width: '40%',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 20,
  },
  titleFormLogin: {textAlign: 'center', fontSize: 18, fontWeight: '600'},
});
