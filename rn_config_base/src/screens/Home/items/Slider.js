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

  const renderItemSlider = (item, index) => {
    return (
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
    );
  };

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
          {renderItemSlider(item, index)}
        </View>
      );
    });
    return listSlider;
  };

  return (
    <Swiper
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
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
    marginBottom: SIZE.height(54),
  },
  dotStyle: {
    marginBottom: SIZE.height(54),
  },
});

export default React.memo(HomeSlider);

//Lưu ý :
//Slider của app này không còn được lấy trong useContext vì nó sẽ được hiển thị chỉ định cho từng user theo favorite và categori:
