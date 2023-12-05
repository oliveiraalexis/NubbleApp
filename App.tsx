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
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}} >
          <Text italic preset="headingLarge">
            Hello World!
          </Text>
          <Icon name='eyeOff' size={30} color={'error'}/>
          <Icon name='eyeOn' size={40} color={'backgroundContrast'}/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
