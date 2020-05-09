import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles';
import i18n from '../../translations';

// import tabNavigationData from './tabNavigationData';
import HomeScreen from '../home/HomeView';
import MoreScreen from '../more/MoreView';


const feedIcon = require('../../../assets/images/tabbar/feed.png');
const pictureIcon = require('../../../assets/images/tabbar/picture.png');
const dotsIcon = require('../../../assets/images/tabbar/dots.png');

const Tab = createBottomTabNavigator();

export default function BottomTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === i18n.t('feed')) {
            iconName = feedIcon
          } else if(route.name === i18n.t('picture')) {
            iconName = pictureIcon
          } else {
            iconName = dotsIcon
          }

          return (
            <Image
              resizeMode="contain"
              source={iconName}
              style={styles.tabBarIcon}
            />
          )
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.primaryLight
      }}
    >
      <Tab.Screen 
        key={0}
        name={i18n.t('feed')}
        component={HomeScreen}
        options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.primaryLight }}>
            {i18n.t('feed')}
          </Text>
        )
      }} 
      />
      <Tab.Screen
        key={0}
        name={i18n.t('picture')}
        component={() => {props.navigation.navigate('PictureScreen')}}
        options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.primaryLight }}>
            {i18n.t('picture')}
          </Text>
        )
      }} 
      />
      <Tab.Screen 
        key={0}
        name={i18n.t('more')}
        component={MoreScreen}
        options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.primaryLight }}>
            {i18n.t('more')}
          </Text>
        )
      }} 
      />

      {/* {tabNavigationData.map((item, idx) => (
        <Tab.Screen 
          key={`tab_item${idx+1}`}
          name={item.name}
          component={item.component}
          options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={item.icon}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.primaryLight }}>
              {item.name}
            </Text>
          )
        }} 
        />        
      ))} */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
});