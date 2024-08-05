import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList, RouteName} from '../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

const ShoppingScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>ShoppingScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.BROWSER)}>
        <Text>Go To Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingScreen;
