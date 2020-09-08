import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import {KEY_NAVIGATION} from '../utils';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName={KEY_NAVIGATION.home}>
      <Drawer.Screen name={KEY_NAVIGATION.home} component={Home} />
    </Drawer.Navigator>
  );
}
