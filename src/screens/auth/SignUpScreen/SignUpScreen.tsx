import React from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { RootStackParamList } from '../../../routes/Routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export const SignUpScreen = ({navigation}: ScreenProps) => {

    const {reset} = useResetNavigationSuccess()

    function submitForm() {

        reset({
            title: 'Sua conta foi criada com sucesso!',
            description: 'Agora é só fazer login na nossa plataforma',
            icon: {
                name: 'checkRound',
                color: 'greenSuccess'
            },
        })
    }

    return (
        <Screen canGoBack scrollable>
            <Text 
                preset="headingLarge" 
                marginBottom="s8">
                    Criar uma conta
            </Text>

            <TextInput 
                label='Seu sobrenome' 
                placeholder='@'
                boxProps={{mb: 's20'}}
            />
            
            <TextInput 
                label='Nome completo' 
                placeholder='Digite seu nome completo'
                boxProps={{mb: 's20'}}
            />

            <TextInput 
                label='E-mail' 
                placeholder='Digite seu e-mail'
                boxProps={{mb: 's20'}}
            />

            <PasswordInput
                label='Senha'
                placeholder='Digite sua nova senha'
            />

            <Button onPress={submitForm} title='Criar minha conta' mt='s48'/>
        </Screen>
        
    )
}
