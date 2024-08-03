import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import {RouteName} from './routes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={RouteName.HOME} component={HomeScreen} />
        <Tab.Screen name={RouteName.SHOPPING} component={ShoppingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
