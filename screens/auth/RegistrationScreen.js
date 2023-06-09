// Додати розмітку форми в компонент RegistrationScreen
// Додати логіку роботи з формою в компонент RegistrationScreen
// Під час сабміту форм збирати дані з них і виводити в консоль
// Додати автозакриття клавіатури по кліку за межами форм (Використовуємо Keyboard.dismiss)
// Додати стилі до компонента RegistrationScreen

import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import { AppContext } from '../../AppContext';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = ({ navigation }) => {
  const { setIsAuth } = useContext(AppContext);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2
  );

  // Dimensions
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 16 * 2;
      setDimensions(width);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);

  // Keyboard
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyboardHide();
    console.log(state);
    setState(initialState);
    setIsAuth(true);
    // navigation.navigate('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/bg_01.jpeg')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : null}
          >
            <View style={styles.authWrap}>
              <Text style={styles.authTitle}>Sign up</Text>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? 32 : 100,
                  width: dimensions,
                }}
              >
                <View>
                  <TextInput
                    style={styles.input}
                    // textAlign="center"
                    placeholder="Login"
                    placeholderTextColor="#BDBDBD"
                    value={state.login}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    // textAlign="center"
                    placeholder="Email address"
                    placeholderTextColor="#BDBDBD"
                    value={state.email}
                    keyboardType="email-address"
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    // textAlign="center"
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    value={state.password}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, password: value }))
                    }
                  />
                </View>

                {!isShowKeyboard && (
                  <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.btnTitle}>Sign up</Text>
                  </TouchableOpacity>
                )}

                {!isShowKeyboard && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.text}>
                      Already have an account? Sign in
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    // fontFamily: 'Roboto-Regular',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  authWrap: {
    backgroundColor: '#ffffff',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    textAlign: 'center',
    marginVertical: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  form: {
    // backgroundColor: 'red',
    // marginHorizontal: 40,
  },
  btn: {
    backgroundColor: '#FF6C00',
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
  },
});

export default RegistrationScreen;
