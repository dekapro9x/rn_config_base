//Library:
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

//Setup :
import {getInfoDevices} from '../../utils/constants/System';
import {COLOR} from '../../utils';

//Component:
import SliderSwiper from './items/SliderSwiper';

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
    <SafeAreaView style={{backgroundColor: COLOR.main_background, flex: 1}}>
      <SliderSwiper></SliderSwiper>
    </SafeAreaView>
  );
}

export default AppIntroScreen;
