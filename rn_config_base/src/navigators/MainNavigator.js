import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//Setup:
import {COLOR, KEY_NAVIGATION} from '../utils';

//Screen:

import Home from '../screens/Home/Home';

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: COLOR.white}} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          backgroundColor: COLOR.TRANSPARENT,
        }}>
        <MainStack.Navigator
          headerMode={'none'}
          initialRouteName={KEY_NAVIGATION.home}
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <MainStack.Screen name={KEY_NAVIGATION.login} component={Home} />
        </MainStack.Navigator>
      </View>
      <SafeAreaView style={{backgroundColor: COLOR.dark}} />
    </Fragment>
  );
}

export default MainNavigator;
