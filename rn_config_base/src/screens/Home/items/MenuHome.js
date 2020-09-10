//Library:
import React, {useRef} from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';

//Setup:
import {SIZE, COLOR, KEY_NAVIGATION} from '../../../utils';
import {AppText, AppImage} from '../../../elements';

export default function MenuHome(props) {
  const navigation = useNavigation();
  const itemAnimation = useRef(new Animated.Value(0.01)).current;
  const {dataMenuHome} = props;

  //Then số lượng dòng menu:
  const renderRow = () => {
    const row = dataMenuHome.map((listItemMenu, index) => {
      return (
        <View
          key={`${index}`}
          style={{
            width: SIZE.width(100),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
          }}>
          {renderListItemMenu(listItemMenu, index)}
        </View>
      );
    });
    return row;
  };

  //Lấy chiều cao của item:
  const getHeight = (numberItem) => {
    if (numberItem === 1) {
      return SIZE.width(96);
    }
    return SIZE.width(96) / numberItem;
  };

  //Ấn vào menu:
  const pressItem = (item) => () => {
    if (item.screen == KEY_NAVIGATION.webview) {
      navigation.navigate(KEY_NAVIGATION.webview, {data: {url: item.link}});
    }
  };
  //Hiển thị Item Menu:
  const renderItemMenu = (item, sizeItem, numberItem) => {
    const sizeImg = sizeItem / 1.4;
    if (item.type == 'icon') {
      return (
        <View
          style={{
            width: sizeItem,
            height: sizeItem,
            marginTop: SIZE.width(1),
            backgroundColor: '#F9F0F0',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZE.width(3),
            margin: 5,
          }}>
          <AppImage
            source={{
              uri: item.img,
            }}
            style={{
              height: sizeImg,
              width: sizeImg,
            }}></AppImage>
          <AppText style={{fontSize: SIZE.H4, fontWeight: 'bold'}}>
            {item.name}
          </AppText>
        </View>
      );
    }
    if (item.type == 'img') {
      return (
        <View
          style={{
            width: sizeItem,
            height: sizeItem,
            marginTop: SIZE.width(1),
            backgroundColor: '#F9F0F0',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZE.width(3),
            margin: 5,
          }}>
          <AppImage
            source={{
              uri:
                'https://banner2.cleanpng.com/20180622/tqt/kisspng-computer-icons-user-clip-art-consignee-5b2d25107181a2.1674732415296852644649.jpg',
            }}
            style={{
              height: sizeImg,
              width: sizeImg,
            }}></AppImage>
          <AppText style={{fontSize: SIZE.H4, fontWeight: 'bold'}}>
            haha
          </AppText>
        </View>
      );
    }
    return (
      <View
        style={{
          width: sizeItem,
          height: sizeItem,
          marginTop: SIZE.width(1),
          backgroundColor: COLOR.TRANSPARENT,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZE.width(3),
          margin: 5,
        }}></View>
    );
  };

  //Hiển thị danh sách item menu:
  const renderListItemMenu = (listItemMenu) => {
    const numberItem = listItemMenu.length;
    const sizeItem = getHeight(numberItem) - numberItem * SIZE.width(0.6);
    return listItemMenu.map((item, index) => {
      return (
        <TouchableOpacity onPress={pressItem(item)} key={`${index}`}>
          {renderItemMenu(item, sizeItem, numberItem)}
        </TouchableOpacity>
      );
    });
  };

  return (
    <View
      style={{
        marginTop: SIZE.height(2),
      }}>
      {renderRow()}
    </View>
  );
}
