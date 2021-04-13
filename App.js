/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Screen from './src/navigation/index';
import {Colors} from './src/style/index';
import {StatusBar} from 'react-native';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.SECONDARY,
    background: Colors.BACKGROUND,
  },
};
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
        <Screen />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
