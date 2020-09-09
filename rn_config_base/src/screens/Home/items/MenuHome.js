import React from 'react';
import {Text, View} from 'react-native';
import {SIZE, COLOR} from '../../../utils';

export default function MenuHome() {
  return (
    <View
      style={{
        marginTop: SIZE.height(2),
        flex: 1,
        backgroundColor: COLOR.white,
      }}>
      <Text> textInComponent </Text>
    </View>
  );
}
