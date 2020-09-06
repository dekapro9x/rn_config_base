//Library:
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

//Setup:
import {SIZE, COLOR} from '../../../utils';
import {AppImage} from '../../../elements/AppImage';

//Data:
import DATA_SLIDER_INTRO from './Data';

export default function SliderSwiper() {
  const rederNextButton = () => {
    return (
      <View
        onPress={() => {
          console.log('DUME');
        }}
        style={{
          position: 'absolute',
          height: 60,
          width: 100,
          top: -120,
          left: -100,
          backgroundColor: 'red',
        }}></View>
    );
  };

  const renderPrevButton = () => {
    return <View></View>;
  };
  const onIndexChangeSlider = (index) => {
    console.log('index', index);
    checkEndSliderActiveNextScreen();
  };
  const mapSlider = () => {
    let listSlider = DATA_SLIDER_INTRO.map((item, index) => {
      return (
        <View key={`${index}`} style={styles.slider}>
          <AppImage
            source={{
              uri: item.img,
            }}
            style={{
              height: '100%',
              width: '100%',
              alignSelf: 'center',
            }}
            resizeMode="stretch"
          />
        </View>
      );
    });
    return listSlider;
  };

  //Vuốt slider cuối cùng chuyển sang màn hình mới:
  const checkEndSliderActiveNextScreen = () => {
    const checkLengthSlider = DATA_SLIDER_INTRO.length;
    console.log('checkLengthSlider', checkLengthSlider);
  };
  return (
    <Swiper
      onIndexChanged={(index) => onIndexChangeSlider(index)}
      onTouchStart={() => {
        console.log('next');
      }}
      onTouchEnd={() => {
        console.log('down');
      }}
      onMomentumScrollEnd={() => {
        console.log('hhhhh');
      }}
      nextButton={rederNextButton()}
      prevButton={renderPrevButton()}
      onTouchStartCapture={console.log('hhhhhasggads')}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      index={0}
      loop={true}
      autoplayDirection={true}
      autoplayTimeout={5}
      pagingEnabled={true}
      autoplay={true}
      style={styles.wrapper}
      showsButtons={true}
      showsHorizontalScrollIndicator={true}
      horizontal={true}>
      {mapSlider()}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  activeDotStyle: {
    height: SIZE.width(4),
    width: SIZE.width(4),
    borderRadius: SIZE.width(2),
    backgroundColor: 'green',
  },

  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    height: SIZE.width(4),
    width: SIZE.width(4),
    borderRadius: SIZE.width(2),
    backgroundColor: 'red',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
