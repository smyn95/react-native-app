import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import {RootStackParamList, RouteName} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowserScreen from './screens/BrowserScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RouteName.HOME} component={HomeScreen} />
      <Tab.Screen name={RouteName.SHOPPING} component={ShoppingScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteName.HOME_TAB}
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name={RouteName.BROWSER} component={BrowserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
