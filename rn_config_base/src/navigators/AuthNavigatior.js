//Lybrary:
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//Setup:
import {KEY_NAVIGATION} from '../utils';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <AuthStack.Navigator
        headerMode={'none'}
        initialRouteName={KEY_NAVIGATION.LOGIN}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <AuthStack.Screen name={keyNavigation.LOGIN} component={Login} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthNavigator;
