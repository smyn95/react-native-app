import React, {useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {RootStackParamList} from '../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'browser'>;

const styles = StyleSheet.create({
  safearea: {flex: 1, backgroundColor: 'black'},
  urlContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  urlText: {
    color: 'white',
  },
});

const BrowserScreen = ({route}: Props) => {
  const {initialUrl} = route.params;
  const [url, setUrl] = useState(initialUrl);

  const urlText = useMemo(
    () => url.replace('https://', '').split('/')[0],
    [url],
  );

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.urlContainer}>
        <Text style={styles.urlText}>{urlText}</Text>
      </View>
      <WebView
        source={{uri: initialUrl}}
        onNavigationStateChange={event => {
          setUrl(event.url);
        }}
      />
    </SafeAreaView>
  );
};

export default BrowserScreen;
