import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import TabNavigator from './MainTabNavigator';

import { colors, fonts } from '../../styles';
import LoginScreen from '../login/LoginView';
import PictureScreen from '../picture/PictureView';

const headerLeftComponent = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      paddingLeft: 10,
    }}
  >
    <Image
      source={require('../../../assets/images/icons/arrow-back.png')}
      resizeMode="contain"
      style={{
        height: 20,
      }}
    />
  </TouchableOpacity>    
)

const StackNavigationData = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'Navigator',
    component: TabNavigator,
    headerLeft: headerLeftComponent,
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'PictureScreen',
    component: PictureScreen,
  },
]

export default StackNavigationData;