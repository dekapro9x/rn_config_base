//Library:
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaView} from 'react-native';

//Setup :
import {getInfoDevices} from '../../utils/constants/System';

//Component:
import {AppContainer} from '../../elements/AppContainer';
import {COLOR} from '../../utils';

function AppIntroScreen() {
  useEffect(() => {
    getInfoDevicesSystem();
    RNBootSplash.hide({duration: 2000});
    return () => {};
  }, []);

  const getInfoDevicesSystem = async () => {
    const getAPIPlatform = await getInfoDevices.getInfoDevicesApiLevelPlatform;
  };

  return (
    <AppContainer
      haveTitle
      nameScreen={'App Intro'}
      style={{backgroundColor: COLOR.main_background}}></AppContainer>
  );
}

export default AppIntroScreen;
