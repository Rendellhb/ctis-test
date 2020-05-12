import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'
import Toast from 'react-native-simple-toast';
import i18n from '../../translations';
import { TextInput } from '../../components';
import { colors } from '../../styles';

const instaLogo = require('../../../assets/images/icons/insta.jpg');

export default function LoginView(props) {
  const [emailUnderlineColor, setEmailUnderlineColor] = useState(colors.lightGray)
  const [passwordUnderlineColor, setPasswordUnderlineColor] = useState(colors.lightGray)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const { login } = props;

  function onError() {
    if (!user) setEmailUnderlineColor(colors.error);
      if (!password) setPasswordUnderlineColor(colors.error);
      Toast.show(i18n.t('loginError'), Toast.LONG);
  }

  function onSuccess() {
    setIsLoading(true);
    setTimeout(() => {
      props.navigation.navigate('Navigator');
      setIsLoading(false);
      setUser('');
      setPassword('');
    }, 2500);
  }

  const onLogin = () => {
    if (user && password) {
      onSuccess();
    } else {
      onError();
    }
  }

  if (login) {
    login({user, password});
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={instaLogo}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>
          {i18n.t('emailLabel')}&nbsp;
          <Text style={{fontWeight: 'bold'}}>{i18n.t('smallEmail')}</Text>
        </Text>
        <TextInput 
          testID='user'
          placeholderTextColor='gray'
          placeholder={i18n.t('capitalEmail')}
          underlineColorAndroid={emailUnderlineColor}
          style={styles.textInputStyle}
          autoCapitalize='none'
          textContentType='emailAddress'
          onFocus={() => {setEmailUnderlineColor(colors.androidGreen)}}
          onBlur={() => setEmailUnderlineColor(colors.lightGray)}
          value={user}
          onChangeText={(value) => {setUser(value)}}
        />
        <Text style={styles.label}>
          {i18n.t('passwordLabel')}&nbsp;
          <Text style={{fontWeight: 'bold'}}>{i18n.t('smallPassword')}</Text>
        </Text>
        <TextInput
          testID='password'
          placeholderTextColor='gray'
          placeholder={i18n.t('capitalPassword')}
          underlineColorAndroid={passwordUnderlineColor}
          style={styles.textInputStyle}
          autoCapitalize='none'
          textContentType='emailAddress'
          onFocus={() => {setPasswordUnderlineColor(colors.androidGreen)}}
          onBlur={() => setPasswordUnderlineColor(colors.lightGray)}
          value={password}
          onChangeText={(value) => {setPassword(value)}}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.accessButton}
          onPress={() => {onLogin()}}
          testID='button'
        >
          <ActivityIndicator
            style={{position: 'absolute'}}
            size='large'
            animating={isLoading}
          />
          {!isLoading ? (
            <Text 
              style={styles.buttonText}
            >
              {i18n.t('access').toUpperCase()}
            </Text>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scale(25),
  },
  logo: {
    width: scale(60),
    height: scale(60),
  },
  formContainer: {
    flex: 5,
    flexDirection: 'column',
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    opacity: 0.5,
    paddingStart: scale(20),
    paddingEnd: scale(20),
  },
  label: {
    marginTop: scale(10),
    fontSize: scale(18),
    color: colors.black
  },
  textInputStyle: {
    marginTop: scale(10),
    height: verticalScale(50),
    fontSize: scale(15),
    color: colors.black
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  accessButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(62),
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});