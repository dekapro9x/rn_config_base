//Library:
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function AppIntro() {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
    return () => {};
  }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text> App Intro </Text>
    </View>
  );
}

export default AppIntro;
