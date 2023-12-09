/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen/>
    </ThemeProvider>
  );
}

export default App;
