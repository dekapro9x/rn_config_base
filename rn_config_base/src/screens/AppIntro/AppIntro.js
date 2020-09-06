//Library:
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

//Setup :
import {getInfoDevices} from '../../utils/constants/System';
import {COLOR} from '../../utils';

//Component:
// import SliderSwiper from './items/SliderSwiper';
import SliderHandler from './items/SliderHandler';

//Data:
import DATA_SLIDER_INTRO from './items/Data';

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
    <SafeAreaView style={{backgroundColor: COLOR.TRANSPARENT, flex: 1}}>
      {/* <SliderSwiper
        dataSlider={DATA_SLIDER_INTRO}
        alwayShowSlider={true}></SliderSwiper> */}
      <SliderHandler
        dataSlider={DATA_SLIDER_INTRO}
        alwayShowSlider={true}></SliderHandler>
    </SafeAreaView>
  );
}

export default AppIntroScreen;
