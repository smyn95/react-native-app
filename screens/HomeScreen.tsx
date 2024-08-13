import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootStackParamList, RouteName} from '../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import WebView from 'react-native-webview';

type Props = NativeStackScreenProps<RootStackParamList>;

const styles = StyleSheet.create({safearea: {flex: 1}});

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <WebView
        source={{uri: 'https://m.naver.com'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onShouldStartLoadWithRequest={req => {
          const {url, mainDocumentURL} = req;

          const isNaverMobile =
            url?.startsWith('https://m.naver.com') ||
            mainDocumentURL?.startsWith('https://m.naver.com');

          if (isNaverMobile) {
            return true;
          }

          if (!url?.startsWith('https://')) {
            navigation.navigate(RouteName.BROWSER);
            return true;
          }

          return false;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
