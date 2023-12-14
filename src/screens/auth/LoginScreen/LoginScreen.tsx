import React from 'react'
import { Icon } from '../../../components/Icon/Icon'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: ScreenProps) => {

    function navigateToSignUpScreen (){
        navigation.navigate('SignUpScreen')
    }

    function navigateToForgotPasswordScreen() {
        navigation.navigate('ForgotPasswordScreen')
    }

    return (
        <Screen>
            <Text preset="headingLarge" marginBottom="s8">Olá!</Text>
            <Text preset="paragraphLarge" marginBottom="s40">Digite seu e-mail e senha para entrar</Text>

            <TextInput 
                label='E-mail'
                errorMessage='Senha incorreta'
                placeholder='Digite seu e-mail'
                boxProps={{mb: 's20'}}
            />

            <TextInput
                label='Senha'
                placeholder='Digite sua senha'
                RightComponent={<Icon name='eyeOn' color='gray2'/>}
                boxProps={{mb: 's10'}}
            />

            <Text onPress={navigateToForgotPasswordScreen} color="primary" preset="paragraphSmall" bold>Esqueci minha senha</Text>
            <Button title='Entrar' mt='s48'/>
            <Button onPress={navigateToSignUpScreen} preset='outline' title='Criar uma conta' mt='s12'/>
        </Screen>
    )
}
