//Lybrary:
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {KEY_NAVIGATION} from '../utils/keys/KeyNavigation';

//Màn hình dành cho người dùng đã xác thực:
import MainNavigator from './MainNavigator';

//Màn hình dành cho người dùng chưa xác thực:
import AuthNavigator from './AuthNavigatior';

//Các màn hình không cần xác thực dùng cho toàn App:
import AppIntro from '../screens/AppIntro/AppIntro';

import CurrentScreenServices from '../utils/services/CurrentScreenServices';
const RootStack = createStackNavigator();
function RootNavigator() {
  return (
    <>
      <NavigationContainer
        onStateChange={(event) => {
          const currentScreen = NavigationService.navigationRef.current.getCurrentRoute()
            .name;
          CurrentScreenServices.set(currentScreen);
        }}>
        <RootStack.Navigator
          headerMode={'none'}
          initialRouteName={KEY_NAVIGATION.app_intro}
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <RootStack.Screen
            name={KEY_NAVIGATION.main_navigator}
            component={MainNavigator}
          />
          <RootStack.Screen
            name={KEY_NAVIGATION.auth_navigator}
            component={AuthNavigator}
          />
          <RootStack.Screen
            name={KEY_NAVIGATION.app_intro}
            component={AppIntro}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigator;
