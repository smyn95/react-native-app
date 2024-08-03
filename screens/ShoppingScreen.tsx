import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteName} from '../routes';

const ShoppingScreen = ({navigation}) => {
  return (
    <View>
      <Text>ShoppingScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteName.BROWSER);
        }}>
        <Text>Go To Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingScreen;
