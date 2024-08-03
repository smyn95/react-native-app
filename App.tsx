import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen}/>
        <Tab.Screen name="shopping" component={ShoppingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
)
};

export default App;
