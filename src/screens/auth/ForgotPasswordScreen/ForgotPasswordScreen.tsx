import React from 'react'
import {  } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { RootStackParamList } from '../../../routes/Routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TextInput } from '../../../components/TextInput/TextInput'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;

export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {

    const {reset} = useResetNavigationSuccess()

    function submitForm(){

        reset({
            title: `Enviamos as instruções${'\n'}para seu e-mail`,
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'greenPrimary'
            },
        })
    }

    return (
        <Screen canGoBack scrollable>
            <Text 
                preset="headingLarge" 
                marginBottom="s16">
                    Esqueci minha senha
            </Text>

            <Text preset="paragraphLarge" marginBottom="s32">
                Digite seu e-mail e enviaremos as instruções para redefinição de senha
            </Text>

            <TextInput 
                label='E-mail' 
                placeholder='Digite seu e-mail'
                boxProps={{mb: 's20'}}
            />

            <Button onPress={submitForm} title='Recuperar senha' mt='s48'/>
        </Screen>
    )
}
