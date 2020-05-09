import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StackNavigationData from './stackNavigationData';

const Stack = createStackNavigator();

export default function NavigatorView() {
  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx+1}`}
          name={item.name} 
          component={item.component} 
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}