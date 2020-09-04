//Library:
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

//Setup :
import {getInfoDevices} from '../../utils/constants/System';

//Component:
import {AppContainer} from '../../elements/AppContainer';
import {Loading} from '../../elements/Loading';

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
      <Loading></Loading>
    </AppContainer>
  );
}

export default AppIntro;
