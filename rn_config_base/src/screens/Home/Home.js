import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AppHeader} from '../../elements';
import {COLOR, SIZE} from '../../utils';

//Component:
import Slider from './items/Slider';
//Data:
import DATA_SLIDER_HOME from './items/DataSlider';

export default function Home({navigation}) {
  const renderTitle = () => {
    return (
      <View
        style={{
          height: SIZE.width(15),
          width: SIZE.width(100),
          backgroundColor: 'red',
        }}></View>
    );
  };
  return (
    <View style={{backgroundColor: '#D8BD6E', flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLOR.white}} />
      <AppHeader renderTitleProp={renderTitle} />
      <Slider dataSlider={DATA_SLIDER_HOME}></Slider>
    </View>
  );
}
