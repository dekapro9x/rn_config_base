//Lybrary:
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Policy from '../screens/Policy/Policy';
import Login from '../screens/Login/Login';

//Setup:
import {KEY_NAVIGATION} from '../utils';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <AuthStack.Navigator
        headerMode={'none'}
        initialRouteName={KEY_NAVIGATION.login}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <AuthStack.Screen name={KEY_NAVIGATION.policy} component={Policy} />
        <AuthStack.Screen name={KEY_NAVIGATION.login} component={Login} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthNavigator;
