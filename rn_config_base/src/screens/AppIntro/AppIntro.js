//Library:
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

//Setup :
import {getInfoDevices} from '../../utils/constants/System';

//Component:
import {AppContainer} from '../../elements/AppContainer';

function AppIntro() {
  useEffect(() => {
    getInfoDevicesSystem();
    RNBootSplash.hide({duration: 2000});
    return () => {};
  }, []);

  const getInfoDevicesSystem = async () => {
    const getAPIPlatform = await getInfoDevices.getInfoDevicesApiLevelPlatform;
    console.log('getAPIPlatform', getAPIPlatform);
  };

  return (
    <AppContainer>
      <Text> App Intro </Text>
    </AppContainer>
  );
}

export default AppIntro;
