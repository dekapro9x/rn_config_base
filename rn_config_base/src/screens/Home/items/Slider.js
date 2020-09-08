//Library:
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

//Setup:
import {SIZE, COLOR, KEY_NAVIGATION} from '../../../utils';

//Component:
import {AppImageButton, Loading, AppText, AppImage} from '../../../elements';

const HomeSlider = (props) => {
  const {dataSlider, index, navigation} = props;

  const listSlider = () => {
    const listSlider = dataSlider.map((item, index) => {
      return (
        <View
          key={`${index}`}
          style={{
            height: (SIZE.width(100) * 9) / 16,
            width: SIZE.width(100),
            backgroundColor: 'green',
          }}>
          <AppImage
            source={{
              uri: item.img,
            }}
            style={{
              height: '100%',
              width: '100%',
              alignSelf: 'center',
            }}
            resizeMode="cover"
          />
        </View>
      );
    });
    return listSlider;
  };

  return (
    <Swiper
      style={{height: (SIZE.device_width * 9) / 16}}
      //renderPagination Dùng để custom lại Slider với index dot tương ứng, với tỷ lệ khung hình mà không bị vượt quá giới hạn cho phép.
      // Slider bao gồm cả Ảnh hiển thị và dấu chấm index.
      renderPagination={(indexActive, total, context) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              width: SIZE.device_width,
              backgroundColor: COLOR.COLOR_ORANGE,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 6,
              marginBottom: 10,
            }}>
            {Array(total)
              .fill(null)
              .map((item, index) => {
                if (index === indexActive) {
                  return <View key={`${index}`} style={styles.dotStyle} />;
                }
                return <View key={`${index}`} style={styles.activeDotStyle} />;
              })}
          </View>
        );
      }}
      loop={true}
      autoplayTimeout={3}
      horizontal={true}
      autoplay={true}>
      {listSlider()}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  activeDotStyle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: COLOR.COLOR_YELLOW,
  },
  dotStyle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: COLOR.white,
  },
});

export default React.memo(HomeSlider);

//Lưu ý :
//Slider của app này không còn được lấy trong useContext vì nó sẽ được hiển thị chỉ định cho từng user theo favorite và categori:
