import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import {COLOR, SIZE} from '../../utils';

//Component:
import HeaderHome from './items/HeaderHome';
import SliderHome from './items/SliderHome';
import TabViewHome from './items/TabViewHome';

//Data:
import DATA_SLIDER_HOME from './data/DataSlider';
import {DATA_MENU_HOME} from './data/DataMenu';

export default function Home({navigation}) {
  const [isRefresh, setStateIsRefresh] = useState(false);
  const onRefreshHome = () => {
    setStateIsRefresh(true);
    setTimeout(() => {
      setStateIsRefresh(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefresh} onRefresh={onRefreshHome} />
      }
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#F9F0F0', flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLOR.white}} />
      <HeaderHome></HeaderHome>
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
            minHeight: SIZE.height(20),
            width: SIZE.width(100),
            backgroundColor: '#F9F0F0',
          }}></View>
        <View
          style={{
            position: 'absolute',
            height: SIZE.height(25),
            top: SIZE.height(18),
            alignItems: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            left: 20,
            right: 20,
          }}>
          <SliderHome dataSlider={DATA_SLIDER_HOME}></SliderHome>
        </View>
      </View>
      <ImageBackground
        source={{uri: 'https://sackim.com/wp-content/uploads/2020/01/14.jpg'}}
        style={{
          width: SIZE.width(100),
        }}>
        <TabViewHome dataMenuHome={DATA_MENU_HOME}></TabViewHome>
      </ImageBackground>
    </ScrollView>
  );
}
