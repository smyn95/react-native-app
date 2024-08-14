import React, { useMemo, useRef, useState } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { RootStackParamList } from '../routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'browser'>;

const styles = StyleSheet.create({
  safearea: { flex: 1, backgroundColor: 'black' },
  urlContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  urlText: {
    color: 'white',
  },
  loadingBarBackground: {
    height: 3,
    backgroundColor: 'white',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: 'green',
  },
});

const BrowserScreen = ({ route }: Props) => {
  const { initialUrl } = route.params;
  const [url, setUrl] = useState(initialUrl);

  const urlText = useMemo(
    () => url.replace('https://', '').split('/')[0],
    [url],
  );

  const progressAnim = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.urlContainer}>
        <Text style={styles.urlText}>{urlText}</Text>
      </View>
      <View style={styles.loadingBarBackground}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <WebView
        source={{ uri: initialUrl }}
        onNavigationStateChange={event => {
          setUrl(event.url);
        }}
        onLoadProgress={event => {
          progressAnim.setValue(event.nativeEvent.progress);
        }}
        onLoadEnd={() => progressAnim.setValue(0)}
      />
    </SafeAreaView>
  );
};

export default BrowserScreen;
