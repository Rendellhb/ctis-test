import React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { StackActions } from '@react-navigation/routers';

import { colors } from '../../styles';
import packageJson from '../../../package.json';
import i18n from '../../translations';

export default function MoreView(props) {
  const exitIcon = require('../../../assets/images/icons/exit.png')
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {i18n.t('moreTitle')}
        </Text>
        <Text style={styles.text}>
          {i18n.t('version')} {packageJson.version} ({i18n.t('buildNum')} {packageJson.buildNumber})
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.exitContainer}
        onPress={() => {
          props.navigation.dispatch(StackActions.popToTop());
        }}
      >
        <Image source={exitIcon} />
        <Text style={styles.text}>
          {i18n.t('exit')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: scale(10),
    marginBottom: scale(15)
  },
  text: {
    color: colors.black,
    opacity: 0.3,
    paddingStart: scale(20),
    paddingEnd: scale(20),
    fontSize: scale(14)
  },
  exitContainer: {
    flexDirection: 'row',
    borderColor: colors.lightGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: scale(10),
    paddingBottom: scale(10),
    paddingStart: scale(20),
    paddingEnd: scale(20)
  }
});