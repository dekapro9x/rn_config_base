import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {COLOR, SIZE} from '../../utils';

//Component:
import Slider from './items/Slider';
//Data:
import DATA_SLIDER_HOME from './items/DataSlider';

export default function Home({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#F9F0F0', flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLOR.white}} />
      {/* Tiêu đề và tên màn hình */}
      {/* <View
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
      </View> */}
      {/* Ảnh Slider. */}
      <View>
        <View
          style={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={{
              uri:
                'https://znews-photo.zadn.vn/w660/Uploaded/mdf_eioxrd/2019_10_09/1.jpg',
            }}
            style={{
              height: SIZE.height(25),
              width: SIZE.width(100),
            }}></ImageBackground>
        </View>
        <View
          style={{
            height: SIZE.height(12),
            width: SIZE.width(100),
            backgroundColor: '#F9F0F0',
          }}></View>
        <View
          style={{
            position: 'absolute',
            height: SIZE.height(20),
            top: SIZE.height(15),
            alignItems: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            left: 20,
            right: 20,
          }}>
          <Slider dataSlider={DATA_SLIDER_HOME}></Slider>
        </View>
      </View>

      <ImageBackground
        source={{uri: 'https://sackim.com/wp-content/uploads/2020/01/14.jpg'}}
        style={{
          height: SIZE.height(100),
          width: SIZE.width(100),
        }}></ImageBackground>
    </ScrollView>
  );
}
