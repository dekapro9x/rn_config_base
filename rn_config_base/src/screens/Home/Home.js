import React from 'react';
import {SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';

import {DrawerActions} from '@react-navigation/native';

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
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          style={{
            height: SIZE.width(15),
            width: SIZE.width(30),
            backgroundColor: 'green',
          }}></TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: '#D8BD6E', flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLOR.white}} />
      <AppHeader renderTitleProp={renderTitle} />
      <Slider dataSlider={DATA_SLIDER_HOME}></Slider>
      <View
        style={{backgroundColor: 'green', height: 100, width: '100%'}}></View>
    </ScrollView>
  );
}
