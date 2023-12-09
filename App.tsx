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

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}} >
          <Text preset="headingLarge" marginBottom="s8">Olá!</Text>
          <Text preset="paragraphLarge" marginBottom="s40">Digite seu e-mail e senha para entrar</Text>

          <TextInput label='E-mail' placeholder='Digite seu e-mail' />
          <TextInput label='Senha' placeholder='Digite sua senha'/>

          <Text color="primary" preset="paragraphSmall" mt='s8' bold>Esqueci minha senha</Text>
          <Button title='Entrar' mt='s48'/>
          <Button preset='outline' title='Criar uma conta' mt='s12'/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
