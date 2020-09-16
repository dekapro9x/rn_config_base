import React, {Component} from 'react';
import {Text, View,SafeAreaView} from 'react-native';
import {AppHeader} from '../../elements/AppHeader';
export default class Map extends Component {
  render() {
    return (
      <>
      <SafeAreaView/>
        <AppHeader title={'POLICY'} leftGoBack={true}></AppHeader>
        <Text> Map </Text>
      </>
    );
  }
}
