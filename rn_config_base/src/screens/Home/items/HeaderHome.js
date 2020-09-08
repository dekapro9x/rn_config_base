import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SIZE} from '../../../utils';

export default function HeaderHome() {
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
}
