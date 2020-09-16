//Library:
import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

//Setup:
import {AppContext} from './contexts/AppContext';

import RootNavigator from './navigators/RootNavigator';
import codePush from "react-native-code-push";
enableScreens();

const App = () => {
  return (
    <AppContext>
      <RootNavigator />
    </AppContext>
  );
};
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
};
export default  codePush(codePushOptions)(App);
